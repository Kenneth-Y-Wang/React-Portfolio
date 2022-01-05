require('dotenv/config');
const express = require('express');
const pg = require('pg');
const ClientError = require('./client-error');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const authorizationMiddleware = require('./authorization-middleware');
const uploadsMiddleware = require('./uploads-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
const jsonMiddleware = express.json();
app.use(jsonMiddleware);

// visiter send message

app.post('/api/messages/create', (req, res, next) => {
  const { sender, email, msgTitle, content } = req.body;

  if (!sender || !email || !msgTitle || !content) {
    throw new ClientError(400, 'message sender,email,title or content is required fields');
  }

  const sql = `
  insert into "messages" ("sender","email","msgTitle","content")
  values ( $1, $2, $3, $4)
  returning *
  `;

  const params = [sender, email, msgTitle, content];
  db.query(sql, params)
    .then(result => {
      const [newMsg] = result.rows;
      res.json(newMsg);
    })
    .catch(err => next(err));
});

// user-signup/signin

app.post('/api/auth/signUp', (req, res, next) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    throw new ClientError(400, 'username, password, anb email are required fields');
  }

  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
    insert into "users"("username","hashedPassword","email")
    values ($1, $2, $3)
    returning "userId", "username", "createdAt"
    `;
      const params = [username, hashedPassword, email];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/signIn', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }

  const sql = `
  select "userId",
         "username",
         "hashedPassword",
         "email"
    from "users"
   where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        throw new ClientError(401, 'invalid login');
      }
      const { userId, username, hashedPassword, email } = user;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = { userId, username, email };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.json({ token, user: payload });
        });
    })
    .catch(err => next(err));
});

// get all posts

app.get('/api/posts/allPosts', (req, res, next) => {
  const sql = `
  select "userId",
         "username",
         "postId",
         "title",
         "posts"."createdAt" as "createdAt",
         "content",
         "imageUrl"
    from "posts"
    join "users" using ("userId")
    order by "postId" desc
  `;

  db.query(sql)
    .then(result => {
      const allPosts = result.rows;
      res.json(allPosts);
    })
    .catch(err => next(err));
});

app.use(authorizationMiddleware);

// create post

app.post('/api/posts/create', uploadsMiddleware, (req, res, next) => {
  const { userId } = req.user;
  const { title, content, time } = req.body;

  if (!title || !content) {
    throw new ClientError(400, 'title and content are required fields');
  }

  let imageUrl;
  if (req.file) {
    imageUrl = req.file.location;
  }
  const sql = `
  insert into "posts" ("userId","title","createdAt","content","imageUrl")
  values ($1,$2,$3,$4,$5)
  returning "postId","title","content","userId","createdAt","imageUrl"
  `;
  const params = [userId, title, time, content, imageUrl];
  db.query(sql, params)
    .then(result => {
      const [newPost] = result.rows;
      res.json(newPost);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

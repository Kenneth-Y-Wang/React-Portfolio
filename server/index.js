require('dotenv/config');
const express = require('express');
const pg = require('pg');
const ClientError = require('./client-error');

const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');

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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

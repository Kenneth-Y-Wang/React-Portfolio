import * as React from 'react';

const User = ({
  userId,
  username,
  email,
  createdAt
}) => {
  return (
    <>
      <div className="col-two-fifth">
        <div className="message-content"><span>Time: </span>{createdAt}</div>
        <div className="message-content"><span>Username: </span>{username}</div>
        <div className="message-content"><span>User Id: </span>{userId}</div>
      </div>
      <div className="col-three-fifth">
        <div className="message-content"><span>Email: </span>{email}</div>
      </div>
    </>
  );
};

export default User;

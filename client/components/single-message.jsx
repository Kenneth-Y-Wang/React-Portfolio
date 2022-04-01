import React from 'react';

export default function Message({
  email,
  sender,
  msgTitle,
  content,
  createdAt
}) {
  return (
    <>
     <div className="col-two-fifth">
      <div className="message-content"><span>Time: </span>{createdAt}</div>
      <div className="message-content"><span>Sender: </span>{sender}</div>
      <div className="message-content"><span>Email: </span>{email}</div>
     </div>
     <div className="col-three-fifth">
      <div className="message-content"><span>Title: </span>{msgTitle}</div>
      <p>{content}</p>
     </div>
    </>
  );
}

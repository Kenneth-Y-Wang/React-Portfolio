import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../lib/app-context';

const Admin = () => {

  const [messages, setMessgae] = useState([]);
  const { handleSignOut } = useContext(AppContext);

  const messageList = messages.map(message => {
    const { messageId, email, sender, msgTitle, content, createdAt } = message;
    return (
      <div key={messageId} className="col-four-fifth-p message-container">
        <div className="col-two-fifth">
          <div className="message-content"><span>Time: </span>{createdAt}</div>
          <div className="message-content"><span>Sender: </span>{sender}</div>
          <div className="message-content"><span>Email: </span>{email}</div>
        </div>
        <div className="col-three-fifth">
          <div className="message-content"><span>Title: </span>{msgTitle}</div>
          <p>{content}</p>
        </div>
      </div>
    );
  });
  const messageContent = messages.length === 0
    ? <h3 className="message-content" style={{ textAlign: 'center', fontWeight: 400 }}>There is no recent message...</h3>
    : messageList;

  useEffect(() => {
    const token = window.localStorage.getItem('react-context-jwt');
    fetch('/api/messages/allMessages', {
      method: 'GET',
      headers: {
        'react-context-jwt': token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setMessgae(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container">
      <div style={{ minHeight: 'calc(100vh - 190px)' }}>
        <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
          <div className="title-content">
            <h1 >Client Message </h1>
            <a href="#"><button onClick={handleSignOut} className= 'sign-out-button' >Sign Out</button></a>
          </div>
        </div>
        {messageContent}
        {/* <div className="col-four-fifth-p message-container">
          <div className="col-two-fifth">
            <div className="message-content"><span>Time: </span>3/25/10:00</div>
            <div className="message-content"><span>Sender: </span>Jimin</div>
            <div className="message-content"><span>Email: </span>Jiminlee19@gmail.com</div>
          </div>
          <div className="col-three-fifth">
            <div className="message-content"><span>Title: </span>Need your help</div>
            <p>Hello there</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Admin;

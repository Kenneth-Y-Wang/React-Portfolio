import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../lib/app-context';
import Message from '../components/single-message';
import User from '../components/single-user';

const Admin = () => {

  const [messages, setMessgae] = useState([]);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('message');
  const { handleSignOut } = useContext(AppContext);

  const messageList = messages.map(message => {
    const { messageId, email, sender, msgTitle, content, createdAt } = message;
    return (
      <div key={messageId} className="col-four-fifth-p message-container">
       <Message email={email} sender={sender} msgTitle={msgTitle} content={content} createdAt={createdAt}/>
      </div>
    );
  });
  const messageContent = messages.length === 0
    ? <h3 className="message-content" style={{ textAlign: 'center', fontWeight: 400 }}>There is no recent message...</h3>
    : messageList;

  const userList = users.map(user => {
    const { userId, username, email, createdAt } = user;
    return (
      <div key={userId} className="col-four-fifth-p message-container">
        <User email={email} username={username} userId={userId} createdAt={createdAt} />
      </div>
    );
  });

  const userContent = users.length === 0
    ? <h3 className="message-content" style={{ textAlign: 'center', fontWeight: 400 }}>There is no users...</h3>
    : userList;

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

  useEffect(() => {
    const token = window.localStorage.getItem('react-context-jwt');
    fetch('/api/users/allUsers', {
      method: 'GET',
      headers: {
        'react-context-jwt': token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container">
      <div style={{ minHeight: 'calc(100vh - 190px)' }}>
        <div className="view-row col-full">
          <button className="view-button" onClick={() => setView('message')}>Message</button>
          <button className="view-button" onClick={() => setView('user')}>User</button>
        </div>
        {view === 'message' && (
          <>
            <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
              <div className="title-content">
                <h1 >Client Message </h1>
                <a href="#"><button onClick={handleSignOut} className= 'sign-out-button' >Sign Out</button></a>
              </div>
            </div>
            {messageContent}
          </>)}
        {view === 'user' && (
        <>
          <div style={{ border: 'none', marginBottom: '1rem' }} className="title-row col-full">
            <div className="title-content">
              <h1 >User</h1>
              <a href="#"><button onClick={handleSignOut} className='sign-out-button' >Sign Out</button></a>
            </div>
          </div>
          {userContent}
        </>)}
      </div>
    </div>
  );
};

export default Admin;

import React, { useState } from 'react';

export default function ContactForm(props) {

  const [formOpen, setFormOpen] = useState(false);
  const [commentBold, setCommentBold] = useState(false);
  const [sender, changeSender] = useState('');
  const [email, changeEmail] = useState('');
  const [msgTitle, changeMsgTitle] = useState('');
  const [content, changeContent] = useState('');
  const [msgStatus, setMsgStatus] = useState('');

  const openForm = () => {
    setFormOpen(!formOpen);
    setMsgStatus(false);
  };

  const ChangeCommentBold = () => {
    setCommentBold(!commentBold);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newIntry = {
      sender: sender,
      email: email,
      msgTitle: msgTitle,
      content: content
    };
    fetch('/api/messages/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newIntry)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          setMsgStatus(true);

        }
      })
      .catch(error => {
        console.error('error', error);
      });
    changeSender('');
    changeEmail('');
    changeMsgTitle('');
    changeContent('');

  };

  return (
  <div ref={props.contactMe} style={{ marginTop: '3rem' }} className="container text-center">
    <h1 className="contact-title ">Get in Touch, <span>Anytime!</span></h1>
    <button onClick={openForm} style={{ marginBottom: '0' }} className="contact-button">Contact Me</button>
    <div className="contact-button-exp">Open | Close Contact Form</div>
    <form onSubmit={handleSubmit} className={formOpen ? 'col-three-fifth form-holder form-open' : 'col-three-fifth form-holder'} >
      <div className={formOpen ? 'form-content col-four-fifth' : 'form-content col-four-fifth hidden'}>
        <label className="form-label" htmlFor="sender">Name</label>
        <input required onChange={event => changeSender(event.target.value)} className="form-input" id="sender" name="sender" type="text" value={sender} placeholder="Please enter your name.."></input>
        <label className="form-label" htmlFor="email">Email</label>
        <input required onChange={event => changeEmail(event.target.value)} className="form-input" id="email" name="email" type="email" value={email} placeholder="Please enter your email.."></input>
        <label className="form-label" htmlFor="msgTitle">Message Title</label>
        <input required onChange={event => changeMsgTitle(event.target.value)} className="form-input" id="msgTitle" name="msgTitle" type="text" value={msgTitle} placeholder="Please enter your message title.."></input>
        <label className="form-label" htmlFor="content">Message</label>
        <textarea required onChange={event => changeContent(event.target.value)} className="form-textarea" id="content" name="content" type="text" value={content} placeholder="Please enter your message.." />
        <button style={{ borderBottom: '2px solid #495057' }} className="contact-button" type="submit">Submit</button>
        <div className={msgStatus ? 'msg-status' : 'msg-status hidden'}>
          <p>Thank you for getting in touch! </p>
          <p>I will get back in touch with you soon， have a great day!</p>
        </div>
      </div>
    </form>
    <div onMouseEnter={ChangeCommentBold} onMouseLeave={ChangeCommentBold} className="col-three-fifth form-content-image">
      <div className={commentBold ? 'contact-info-img comment-hover' : 'contact-info-img'}></div>
      <p className={commentBold ? ' contact-info col-four-fifth comment-bold' : 'contact-info col-four-fifth'} style={{ zIndex: 5, transition: '0.5s' }}>For business inquiries and collaborations <br></br>please contact me above. <br></br>I am looking forward to hearing from you!</p>
    </div>
    <button onClick={() => props.scroll(props.pageTop)} className="contact-button" style={{ borderBottom: '2px solid #495057' }}>Back to Top</button>
  </div>
  );
}

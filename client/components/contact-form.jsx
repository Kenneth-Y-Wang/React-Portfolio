import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      sender: '',
      email: '',
      msgTitle: '',
      content: ''
    };
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.setState({ formOpen: !this.state.formOpen });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="contact-section" style={{ marginTop: '3rem' }}className="container text-center">
        <h1 className="contact-title ">Get in Touch, <span>Anytime!</span></h1>
        <button onClick={this.openForm} className="contact-button">Contact Me</button>
        <form className={this.state.formOpen ? 'col-three-fifth form-holder form-open' : 'col-three-fifth form-holder'} >
         <div className={this.state.formOpen ? 'form-content col-four-fifth' : 'form-content col-four-fifth hidden'}>
           <label className="form-label" htmlFor="name">Name</label>
           <input className="form-input" id="name" name="name" type="text" value={this.state.name} placeholder="Please enter your name.."></input>
           <label className="form-label" htmlFor="email">Email</label>
           <input className="form-input" id="email" name="email" type="email" value={this.state.email} placeholder="Please enter your email.."></input>
           <label className="form-label" htmlFor="msgTitle">Message Title</label>
           <input className="form-input" id="msgTitle" name="msgTitle" type="text" value={this.state.msgTitle} placeholder="Please enter your message title.."></input>
           <label className="form-label" htmlFor="content">Message</label>
           <textarea className="form-textarea" id="content" name="content" type="text" value={this.state.content} placeholder="Please enter your message.." />
            <button style={{ borderBottom: '2px solid #495057' }} className="contact-button">Submit</button>
         </div>
        </form>
        <div className="col-three-fifth form-content-image">
          <p className=" contact-info col-three-fifth">For business inquiries and collaborations please contact me below and leave a link to your website or portfolio. I am looking forward to hearing from you!</p>
        </div>
      </div>
    );
  }
}

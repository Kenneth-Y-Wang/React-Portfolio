import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      sender: '',
      email: '',
      msgTitle: '',
      content: '',
      msgStatus: false
    };
    this.openForm = this.openForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openForm() {
    this.setState({ formOpen: !this.state.formOpen, msgStatus: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/messages/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState({ msgStatus: true });
        }
      })
      .catch(error => {
        console.error('error', error);
      });

    this.setState({
      sender: '',
      email: '',
      msgTitle: '',
      content: ''
    });

  }

  render() {
    return (
      <div ref={this.props.contactMe} style={{ marginTop: '3rem' }}className="container text-center">
        <h1 className="contact-title ">Get in Touch, <span>Anytime!</span></h1>
        <button onClick={this.openForm} style={{ marginBottom: '0' }} className="contact-button">Contact Me</button>
        <div className="contact-button-exp">Open | Close Contact Form</div>
        <form onSubmit={this.handleSubmit} className={this.state.formOpen ? 'col-three-fifth form-holder form-open' : 'col-three-fifth form-holder'} >
         <div className={this.state.formOpen ? 'form-content col-four-fifth' : 'form-content col-four-fifth hidden'}>
           <label className="form-label" htmlFor="sender">Name</label>
           <input required onChange={this.handleChange} className="form-input" id="sender" name="sender" type="text" value={this.state.sender} placeholder="Please enter your name.."></input>
           <label className="form-label" htmlFor="email">Email</label>
           <input required onChange={this.handleChange} className="form-input" id="email" name="email" type="email" value={this.state.email} placeholder="Please enter your email.."></input>
           <label className="form-label" htmlFor="msgTitle">Message Title</label>
           <input required onChange={this.handleChange} className="form-input" id="msgTitle" name="msgTitle" type="text" value={this.state.msgTitle} placeholder="Please enter your message title.."></input>
           <label className="form-label" htmlFor="content">Message</label>
           <textarea required onChange={this.handleChange} className="form-textarea" id="content" name="content" type="text" value={this.state.content} placeholder="Please enter your message.." />
           <button style={{ borderBottom: '2px solid #495057' }} className="contact-button">Submit</button>
           <div className={this.state.msgStatus ? 'msg-status' : 'msg-status hidden'}>
              <p>Thank you for getting in touch! </p>
              <p>I will get back in touch with you soon， have a great day!</p>
           </div>
         </div>
        </form>
        <div className="col-three-fifth form-content-image">
          <p className=" contact-info col-three-fifth">For business inquiries and collaborations please contact me above and leave a link to your website or portfolio. I am looking forward to hearing from you!</p>
        </div>
        <button onClick={() => this.props.scroll(this.props.pageTop)} className="contact-button" style={{ borderBottom: '2px solid #495057' }}>Back to Top</button>
      </div>
    );
  }
}

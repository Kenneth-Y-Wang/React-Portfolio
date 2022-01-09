import React from 'react';
import AppContext from '../lib/app-context';
import EditPost from './edit-post';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailPost: '',
      detailHover: '',
      editPost: '',
      deletePost: ''
    };
    this.detailHover = this.detailHover.bind(this);
    this.detailHoverLeft = this.detailHoverLeft.bind(this);
    this.detailPost = this.detailPost.bind(this);
    this.exitPost = this.exitPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.exitEditPost = this.exitEditPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.exitDeletePost = this.exitDeletePost.bind(this);
  }

  detailPost(postId) {
    this.setState({ detailPost: postId });
  }

  exitPost() {
    this.setState({ detailPost: '' });
  }

  editPost(postId) {
    this.setState({ editPost: postId });
  }

  exitEditPost() {
    this.setState({ editPost: '' });
  }

  deletePost(postId) {

    this.setState({ deletePost: postId });

  }

  exitDeletePost() {
    this.setState({ deletePost: '' });
  }

  detailHover(postId) {
    this.setState({ detailHover: postId });
  }

  detailHoverLeft() {
    this.setState({ detailHover: '' });
  }

  render() {

    const loginUsername = this.context.user
      ? this.context.user.username
      : '';
    const allPosts = this.props.allPosts;
    const postsList = allPosts.map(post => {
      const { postId, title, createdAt, content, imageUrl, username } = post;
      const date = createdAt.slice(0, 10) + ' ' + createdAt.slice(11, 16);

      return (
      <div key={postId} onMouseEnter={() => this.detailHover(postId)} onMouseLeave={this.detailHoverLeft} className="post-holder col-forty-five">
       <div className="post-image-holder">
         <img className={this.state.detailHover === postId ? 'img-hover' : ''} src={imageUrl}></img>
         <div className={this.state.detailHover === postId ? 'hover-button-holder' : 'hover-button-holder hidden'}>
            <div className="col-four-fifth button-content-holder">
              <div onClick={() => this.detailPost(postId)} className="post-detail-button" >Post Details</div>
            </div>
         </div>
       </div>
       <div className="post-content-holder">
         <h3 style={{ marginBottom: '.75rem', height: '50px' }} >{title}</h3>
         <h5>Published by <span style={{ fontWeight: 550, color: '#6c757d' }}>{username}</span></h5>
         <h6>{date}</h6>
         <div className= 'edit-delete-row col-full' >
              <button className={loginUsername === username ? 'edit-button' : 'edit-button non-visible'}><i onClick={() => this.editPost(postId)} className="far fa-edit"></i></button>
              <button className={loginUsername === username ? 'edit-button' : 'edit-button non-visible'}><i onClick={() => this.deletePost(postId)} className="far fa-trash-alt"></i></button>
         </div>
       </div>
       <div className={this.state.detailPost === postId ? 'signin-modal-holder' : 'signin-modal-holder hidden'}>
         <div className="col-four-fifth signin-block">
           <div className="detail-img-holder">
             <img className="detail-img" src={imageUrl}></img>
           </div>
           <div className="post-content-holder" style={{ textAlign: 'start', borderBottom: '1px #495057 solid', paddingLeft: 0 }}>
            <h1>{title}</h1>
            <h3>Published by <span style={{ fontWeight: 500, color: '#6c757d' }}>{username}</span></h3>
            <h6>{date}</h6>
           </div>
           <div className="detail-content-holder">
             <div style={{ whiteSpace: 'break-spaces' }}>{content}</div>
           </div>
           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
             <button onClick={this.exitPost} style={{ margin: 0 }} className="contact-button">Exit</button>
           </div>
         </div>
       </div>
       <div className={this.state.editPost === postId ? 'signin-modal-holder' : 'signin-modal-holder hidden'}>
        <EditPost title={title} content={content} postId={postId} exitEditPost={this.exitEditPost} editPostDisplay={this.props.editPostDisplay} />
       </div>
       <div className={this.state.deletePost === postId ? 'signin-modal-holder' : 'signin-modal-holder hidden'}>
         <div style={{ padding: '3rem', textAlign: 'center' }} className="col-three-fifth signin-block">
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'normal', marginBottom: '2rem', color: '#495057' }}>Please confirm to delete</h1>
          <div style={{ marginTop: 0 }} className="post-button-holder">
            <button onClick={this.exitDeletePost} className="post-submit-button" type="button">BACK</button>
            <button onClick={() => this.props.deletePost(postId)} className="post-submit-button" type="submit">DELETE</button>
          </div>
         </div>
       </div>
      </div>
      );

    });
    return (
      <div className="container ">
        <div style={{ paddingBottom: '1.25rem' }} className="title-row col-full">
          <h1>Recent Posts</h1>
        </div>
        <div className="post-row">
         {postsList}
        </div>
      </div>
    );
  }
}

Posts.contextType = AppContext;

import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailPost: '',
      detailHover: ''
    };
    this.detailHover = this.detailHover.bind(this);
    this.detailHoverLeft = this.detailHoverLeft.bind(this);
    this.detailPost = this.detailPost.bind(this);
    this.exitPost = this.exitPost.bind(this);
  }

  detailPost(postId) {
    this.setState({ detailPost: postId });
  }

  exitPost() {
    this.setState({ detailPost: '' });
  }

  detailHover(postId) {
    this.setState({ detailHover: postId });
  }

  detailHoverLeft() {
    this.setState({ detailHover: '' });
  }

  render() {
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
         <h3>{title}</h3>
         <h5>Published by <span style={{ fontWeight: 550, color: '#6c757d' }}>{username}</span></h5>
         <h6>{date}</h6>
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
             <p>{content}</p>
           </div>
           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
             <button onClick={this.exitPost} style={{ margin: 0 }} className="contact-button">Exit</button>
           </div>
         </div>
       </div>
      </div>
      );

    });
    return (
      <div className="container ">
        <div className="title-row col-full">
          <h1>Recent Posts</h1>
        </div>
        <div className="post-row">
         {postsList}
        </div>
      </div>
    );
  }
}

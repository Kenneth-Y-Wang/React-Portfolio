import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailPost: ''
    };
  }

  render() {
    const allPosts = this.props.allPosts;

    const postsList = allPosts.map(post => {
      const { postId, title, createdAt, content, imageUrl, username } = post;
      const date = createdAt.slice(0, 10) + ' ' + createdAt.slice(11, 16);

      return (
      <div key={postId} className="post-holder col-forty-five">
       <div className="post-image-holder">
         <img src={imageUrl}></img>
         <div className="hover-button-holder">
            <div className="col-four-fifth button-content-holder">
              <div style={{ color: '#495057' }} className="button-content">Post Details</div>
            </div>
         </div>
       </div>
       <div className="post-content-holder">
         <h3>{title}</h3>
            <h5>Published by <span style={{ fontWeight: 550, color: '#6c757d' }}>{username}</span></h5>
         <h6>{date}</h6>
       </div>

        {/* <ul>
          <li>{title}</li>
          <li>{content}</li>
          <li><img src={imageUrl}></img></li>
          <li>{username}</li>
          <li>{date}</li>
        </ul> */}
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

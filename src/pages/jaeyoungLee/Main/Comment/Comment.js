import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <div className="friend_comment">
      <p className="explanation"><span className="like_font">wecode</span>  코딩이란..</p>
          <ul className="commentBox">
          {commentList.map((comment,id) =>
          <CommentComponent key={id} commentList={comment}/>
          )}
        </ul>
      </div>
    );
  }
}

export default Comment;
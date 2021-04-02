import React, { Component } from 'react';
import './Comment.scss';

import smileImg from '../../../../../images/jonghoLee/smile.png';

export default class Comment extends Component {
  constructor() {
    super();

    this.state = {
      comment: "",
      isAbled: true,
    }
    this.commentInputRef = React.createRef();
  }

  commentBtnClick = (e) => {
    e.preventDefault();
    this.updateComment();
  }

  updateComment = () => {
    this.props.changeComment(this.state.comment);
    this.commentInputRef.current.value = "";
  }

  commentInputKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.comment.trim().length > 0) {
      this.updateComment()
    }
  }

  handleAddComment = (e) => {
    this.setState({
      comment: e.target.value
    });

    this.setState({
      isAbled: !(e.target.value.trim().length > 0)
    })
  }

  render() {
    return (
      <div className="comment">
        <form className="comment-form" action="#">
          <img className="comment-image" src={smileImg} alt="smile" />
          <textarea className="comment-text" name="" cols="30" rows="10"
            placeholder="댓글 달기..." onChange={this.handleAddComment} ref={this.commentInputRef} onKeyPress={this.commentInputKeyPress}></textarea>
          <button className="comment-btn" onClick={this.commentBtnClick} disabled={this.state.isAbled} >게시</button>
        </form>
      </div>
    )
  }
}

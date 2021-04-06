import React, { Component } from 'react';
import './Comment.scss';

import smileImg from '../../../../../images/jonghoLee/smile.png';

export default class Comment extends Component {
  constructor() {
    super();

    this.state = {
      comment: "",
      isDisabled: true,
    }
  }

  commentBtnClickHandler = (e) => {
    e.preventDefault();
    this.makeComment();
  }

  textKeyPressHandler = (e) => {
    if (e.key === 'Enter' && this.state.comment.trim().length > 0) {
      this.makeComment();
    }
  }

  makeComment = () => {
    this.props.createComment(this.state.comment);
    this.setState({
      comment: '',
      isDisabled: true
    })
  }

  textChangeHandler = (e) => {
    this.setState({
      comment: e.target.value,
      isDisabled: (e.target.value.trim().length > 0) ? false : true,
    });
  }

  render() {
    return (
      <div className="comment">
        <form className="comment-form" action="#">
          <img className="comment-image" src={smileImg} alt="smile" />
          <textarea className="comment-text" name="" cols="30" rows="10" value={this.state.comment}
            placeholder="댓글 달기..." onChange={this.textChangeHandler} onKeyPress={this.textKeyPressHandler}></textarea>
          <button className="comment-btn" onClick={this.commentBtnClickHandler} disabled={this.state.isDisabled} >게시</button>
        </form>
      </div>
    )
  }
}

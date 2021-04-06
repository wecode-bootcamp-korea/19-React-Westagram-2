import React, { Component } from 'react';
import './UserComment.scss'

class UserComment extends Component {
  heartClickHandler = () => {
    this.props.changeHeart(this.props.index);
  }

  trashClickHandler = () => {
    this.props.deleteComment(this.props.index)
  }

  render() {
    const { comment, isLiked } = this.props;
    return (
      <li className="section-content-box">
        <span className="section-content-nickname">jongho</span>
        <span className="section-content-content">{comment}</span>
        <i onClick={this.heartClickHandler} className="far fa-heart" style={{ color: isLiked ? "red" : "black" }} ></i>
        <i onClick={this.trashClickHandler} className="far fa-trash-alt"></i>
      </li>
    )
  }
}

export default UserComment;
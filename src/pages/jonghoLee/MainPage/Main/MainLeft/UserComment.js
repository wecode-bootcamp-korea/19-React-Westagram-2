import React, { Component } from 'react';

class UserComment extends Component {
  render() {
    const { index, content } = this.props;
    return (
      <li key={index} className="section-content-box">
        <span className="section-content-nickname">jongho</span>
        <span className="section-content-content">{content}</span>
        <i className="far fa-heart"></i>
        <i className="far fa-trash-alt"></i>
      </li>
    )
  }
}

export default UserComment;
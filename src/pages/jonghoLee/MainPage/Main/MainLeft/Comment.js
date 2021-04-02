import React, { Component } from 'react';
import './Comment.scss';

import smileImg from '../../../../../images/jonghoLee/smile.png';

export default class Comment extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      comment: ""
    }

    this.commentInputRef = React.createRef();
  }

  commentBtnClick = async (e) => {
    e.preventDefault();

    await this.setState({
      comments: [...this.state.comments, this.state.comment],
    })

    await this.props.changeComment(this.state.comments);
    this.commentInputRef.current.value = "";
  }

  commentInputKeyPress = async (e) => {
    if (e.key === 'Enter') {
      await this.setState({
        comments: [...this.state.comments, this.state.comment],
      })

      await this.props.changeComment(this.state.comments);
      this.commentInputRef.current.value = "";
    }
  }

  handleAddComment = (e) => {
    this.setState({
      comment: e.target.value
    });
  }


  render() {
    return (
      <div className="comment">
        {/* <!-- 7. comment --> */}
        <form className="comment-form" action="#">
          <img className="comment-image" src={smileImg} alt="smile" />
          <textarea className="comment-text" name="" id="" cols="30" rows="10"
            placeholder="댓글 달기..." onChange={this.handleAddComment} ref={this.commentInputRef} onKeyPress={this.commentInputKeyPress}></textarea>
          <button className="comment-btn" onClick={this.commentBtnClick}  >게시</button>
        </form>
      </div>
    )
  }
}

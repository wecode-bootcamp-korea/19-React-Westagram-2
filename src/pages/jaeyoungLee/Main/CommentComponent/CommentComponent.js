import React from 'react';
import './CommentComponent.scss';

class CommentComponent extends React.Component {
  render() {
    return (
        <li className="CommentComponent">{this.props.commentList}</li>
    )
  }
}

export default CommentComponent;
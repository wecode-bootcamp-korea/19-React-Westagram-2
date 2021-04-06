import React from 'react';
import './CommentComponent.scss';

class CommentComponent extends React.Component {
  render() {
    const { key, name, comment} = this.props
    return (
        <li className="CommentComponent">
          {key}
          <strong>{name}</strong>
          {comment}
        </li>
    )
  }
}

export default CommentComponent;
import React from 'react';
import './CommentComponent.scss';

class CommentComponent extends React.Component {
  render() {
    return (
      <div className='CommentComponent'>
        <li key={this.props.id} className="commentBoxList">{this.props.commentList}</li>
      </div>
    )
  }
}

export default CommentComponent;
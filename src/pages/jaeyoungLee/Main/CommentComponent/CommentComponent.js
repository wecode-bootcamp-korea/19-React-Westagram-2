import React from 'react';
import './CommentComponent.scss';

class CommentComponent extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <div className='CommentComponent'>
        <li key={this.props.index} className="commentBoxList">{this.props.commentList}</li>
      </div>
    )
  }
}

export default CommentComponent;
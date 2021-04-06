import React, { Component } from 'react';
import './StoryItem.scss';

export default class StoryItem extends Component {
  render() {
    const { imageUrl, nickname } = this.props.story;
    return (
      <li className="story-content">
        <img className="story-content-icon"
          src={imageUrl}
          alt={nickname} />
        <span className="story-content-nickname">{nickname}</span>
      </li>
    )
  }
}

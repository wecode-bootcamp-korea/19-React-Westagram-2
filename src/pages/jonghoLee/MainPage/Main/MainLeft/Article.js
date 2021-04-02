import React, { Component } from 'react';
import UserComment from './UserComment';
import Comment from './Comment';
import './Article.scss';
import moreImg from '../../../../../images/jonghoLee/more.png';
import alcoholImg from '../../../../../images/jonghoLee/alcohol.jpg';
import heartImg from '../../../../../images/jonghoLee/heart.png';
import chatImg from '../../../../../images/jonghoLee/chat.png';
import paperImg from '../../../../../images/jonghoLee/paper-plane.png';
import markImg from '../../../../../images/jonghoLee/small-bookmark.png';

export default class Article extends Component {
  constructor() {
    super();

    this.state = {
      comments: []
    }
  }

  changeComment = (comments) => {
    this.setState({
      comments
    })
  }

  render() {
    return (
      <article>
        <header className="article-header">
          <img className="article-hd-image"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/88903500_2252938245016076_60289486726103040_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=eqe6j0Fu9WIAX97lMFy&ccb=7-4&oh=8e018fb7785e9b7f32b778f12f69d1af&oe=60818E05"
            alt="" />
          <div className="article-hd-content">
            <a className="article-hd-nickname" href="https://naver.com">user_nickname</a>
            <img className="article-hd-more" src={moreImg} alt="" />
          </div>
        </header>
        <img className="article-image" src={alcoholImg} alt="sss" />

        <div className="section-box">
          <div className="section-content">
            <div className="section-content-left">
              <img src={heartImg} alt="heart" />
              <img src={chatImg} alt="comment" />
              <img src={paperImg} alt="share" />
            </div>

            <div className="section-content-right">
              <img src={markImg} alt="book-mark" />
            </div>

          </div>
          <p className="section-views">조회 1,032회</p>

          <ul id="parent-list" className="section-content-list">
            {this.state.comments.map((comment, i) => {
              return (
                <UserComment index={i} content={comment} />
              )
            })}
          </ul>
          <p className="section-created">1일 전</p>
        </div>

        <Comment changeComment={this.changeComment} />

      </article>

    )
  }
}

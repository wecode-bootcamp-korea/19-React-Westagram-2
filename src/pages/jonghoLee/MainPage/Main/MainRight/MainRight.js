import React, { Component } from 'react';
import './MainRight.scss';
import jonghoImg from '../../../../../images/jonghoLee/jongho.png';
import h1Img from '../../../../../images/jonghoLee/h_1.jpg';
import h2Img from '../../../../../images/jonghoLee/h_2.jpg';
import h3Img from '../../../../../images/jonghoLee/h_3.jpg';
import h4Img from '../../../../../images/jonghoLee/h_4.jpg';
import h5Img from '../../../../../images/jonghoLee/h_5.jpg';

export default class MainRight extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="main-right-fiexd">
          <div className="main-right-header">
            <img className="main-right-profile" src={jonghoImg} alt="" />
            <div className="main-right-content">
              <span className="main-right-nickname">jongho.ho2</span>
              <span className="main-right-name">이종호</span>
            </div>
            <button className="main-right-content-btn">전환</button>
          </div>
          <div className="main-right-sub">
            <span className="sub-recommand">회원님을 위한 추천</span>
            <span className="sub-all">모두 보기</span>
          </div>

          <div className="main-right-recommand-div">
            <img className="main-right-recommand-profile" src={h1Img} alt="" />
            <div className="main-right-recommand-content">
              <span className="main-right-nickname">onono_rrr</span>
              <span className="main-right-name">회원님을 위한 추천</span>
            </div>
            <button className="main-right-recommand-content-btn">팔로우</button>
          </div>
          <div className="main-right-recommand-div">
            <img className="main-right-recommand-profile" src={h2Img} alt="" />
            <div className="main-right-recommand-content">
              <span className="main-right-nickname">kkkkkk_nana</span>
              <span className="main-right-name">회원님을 위한 추천</span>
            </div>
            <button className="main-right-recommand-content-btn">팔로우</button>
          </div>
          <div className="main-right-recommand-div">
            <img className="main-right-recommand-profile" src={h3Img} alt="" />
            <div className="main-right-recommand-content">
              <span className="main-right-nickname">ss_Dfdfd</span>
              <span className="main-right-name">회원님을 위한 추천</span>
            </div>
            <button className="main-right-recommand-content-btn">팔로우</button>
          </div>
          <div className="main-right-recommand-div">
            <img className="main-right-recommand-profile" src={h4Img} alt="" />
            <div className="main-right-recommand-content">
              <span className="main-right-nickname">slick_kk</span>
              <span className="main-right-name">회원님을 위한 추천</span>
            </div>
            <button className="main-right-recommand-content-btn">팔로우</button>
          </div>
          <div className="main-right-recommand-div">
            <img className="main-right-recommand-profile" src={h5Img} alt="" />
            <div className="main-right-recommand-content">
              <span className="main-right-nickname">dd_ffsd</span>
              <span className="main-right-name">회원님을 위한 추천</span>
            </div>
            <button className="main-right-recommand-content-btn">팔로우</button>
          </div>

          <div className="main-right-friend">
            <button className="darkmode-btn">dark</button>
          </div>
        </div>
      </div>
    )
  }
}

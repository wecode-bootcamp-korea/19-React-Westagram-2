import React, { Component } from 'react';
import './Nav.scss';
import loupeImg from '../../../../images/jonghoLee/loupe.png';
import homeImg from '../../../../images/jonghoLee/home.png';
import planeImg from '../../../../images/jonghoLee/paper-plane.png';
import compassImg from '../../../../images/jonghoLee/compass.png';
import heartImg from '../../../../images/jonghoLee/heart.png';
import jonghoImg from '../../../../images/jonghoLee/jongho.png';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <h1>Westargram</h1>
          <div className="nav-search-div">
            <img className="nav-search-icon" src={loupeImg} alt="찾기" />
            <input className="nav-search-input" type="text" placeholder="검색" />

            <div className="nav-search-container">
              <ul className="nav-search-shadow"></ul>
              <div className="nav-search-triangle"></div>
              <ul className="nav-search-list"></ul>
            </div>
          </div>

          <div className="nav-content">
            <img className="nav-icon" src={homeImg} alt="홈" />
            <img className="nav-icon" src={planeImg} alt="공유" />
            <img className="nav-icon" src={compassImg} alt="검색" />
            <img className="nav-icon" src={heartImg} alt="좋아요" />
            <img className="nav-icon nav-icon-user" src={jonghoImg} alt="시용자" />
          </div>
        </nav>
      </div>
    )
  }
}

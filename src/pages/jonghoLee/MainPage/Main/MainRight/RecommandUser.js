import React, { Component } from 'react'

export default class RecommandUser extends Component {
  render() {
    return (
      <div className="main-right-recommand-div">
        <img className="main-right-recommand-profile" src={this.props.imageObj} alt="" />
        <div className="main-right-recommand-content">
          <span className="main-right-nickname">onono_rrr</span>
          <span className="main-right-name">회원님을 위한 추천</span>
        </div>
        <button className="main-right-recommand-content-btn">팔로우</button>
      </div>
    )
  }
}

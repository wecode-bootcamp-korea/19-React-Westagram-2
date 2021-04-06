import React, { Component } from 'react';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <MainLeft />
        <MainRight />
      </div>
    )
  }
}

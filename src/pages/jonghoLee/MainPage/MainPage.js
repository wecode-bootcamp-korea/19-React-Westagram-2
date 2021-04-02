import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import './MainPage.scss';
import '../reset.css';
import '../common.scss';

export default class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Main />
      </div>
    )
  }
}
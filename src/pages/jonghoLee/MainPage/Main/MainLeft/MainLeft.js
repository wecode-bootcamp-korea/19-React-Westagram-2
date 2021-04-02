import React, { Component } from 'react'
import Story from './Story';
import Article from './Article';
import './MainLeft.scss';

export default class MainLeft extends Component {
  render() {
    return (
      <main>
        <Story />
        <Article />
      </main>
    )
  }
}

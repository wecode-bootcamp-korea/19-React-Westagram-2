import React, { Component } from 'react'
import Story from './Story';
import Article from './Article';
import './MainLeft.scss';

export default class MainLeft extends Component {

  constructor() {
    super();
    this.state = {
      articleList: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/articleData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleList: data,
        });
      });
  }

  makeRanNum = () => {
    const min = 1;
    const max = 999000;
    let ranNum = Math.round(Math.random() * (max - min) + min);
    let ranStr = ranNum.toString();
    let newRanStr = "";
    let i = 0;
    for (i = ranStr.length - 3; i > -1; i -= 3) {
      newRanStr = ',' + ranStr.slice(i, i + 3) + newRanStr
    }

    return i !== -3 ? ranStr.slice(0, i + 3) + newRanStr : newRanStr.slice(1, newRanStr.length);
  }

  render() {
    return (
      <main>
        <Story />
        {this.state.articleList.map((obj, i) => {
          return <Article imageObj={obj.imageUrl} viewCount={this.makeRanNum()} key={obj.imageUrl} />
        })}
      </main>
    )
  }
}

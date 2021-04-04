import React, { Component } from 'react'
import Story from './Story';
import Article from './Article';
import './MainLeft.scss';

export default class MainLeft extends Component {

  constructor() {
    super();
    this.state = {
      storyObj: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1617296378506-bc112028a525?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1614801535026-9bc1cbf60f33?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1617329908208-1b7dcdfdbbf1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1617301535895-adfb93d46243?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1617322686513-a0732c25f0c5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1617339847542-5257a2f8b145?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1589510173392-a7b4a857088f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          viewCount: this.makeRanNum()
        },


      ],
      imageList: [
        'https://images.unsplash.com/photo-1617298352465-85a0cb27a81d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1614801535026-9bc1cbf60f33?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1617329908208-1b7dcdfdbbf1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1617301535895-adfb93d46243?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1617322686513-a0732c25f0c5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1617339847542-5257a2f8b145?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1589510173392-a7b4a857088f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ]
    }
  }

  makeRanNum = () => {
    const min = 1;
    const max = 999000;
    let randomNum = Math.round(Math.random() * (max - min) + min);

    let ranStr = randomNum + "";
    let newRanStr = "";
    let i = 0;
    for (i = ranStr.length - 3; i > -1; i -= 3) {
      newRanStr = ',' + ranStr.slice(i, i + 3) + newRanStr
    }
    if (i !== -3)
      newRanStr = ranStr.slice(0, i + 3) + newRanStr
    else
      newRanStr = newRanStr.slice(1, newRanStr.length)
    return newRanStr;
  }

  render() {
    return (
      <main>
        <Story />
        {this.state.storyObj.map((obj) => {
          return <Article imageObj={obj.imageUrl} viewCount={obj.viewCount} key={obj.imageUrl} />
        })}
      </main>
    )
  }
}

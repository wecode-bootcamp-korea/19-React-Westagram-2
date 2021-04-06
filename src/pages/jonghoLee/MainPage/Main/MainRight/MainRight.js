import React, { Component } from 'react';
import './MainRight.scss';
import jonghoImg from '../../../../../images/jonghoLee/jongho.png';
import RecommandUser from './RecommandUser';

export default class MainRight extends Component {
  constructor() {
    super();

    this.state = {
      imageList: [
        'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/58409361_658608891230300_3625990139232124928_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=fibKKWMHWqIAX82leAF&ccb=7-4&oh=b1faa7128d7adee893124f827c554b7b&oe=6080A6A2',
        'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104884761_714419612435891_3082398820319266827_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=0TzRQLQBLScAX8lUxHN&ccb=7-4&oh=da20a3c85af82f65de1408908a315f76&oe=607F9384',
        'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/153241242_435041407550689_3814507477094660956_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=1jltaj2vjNAAX_BSMot&ccb=7-4&oh=9fb1d9cde1a33a6964cfc483b5f35b3d&oe=6081CEB6',
        'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/158419737_263341431927860_4396109123449644073_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=vICN8CKh-0MAX8eSXzJ&ccb=7-4&oh=cc0d6b0905a568c03a98e61d2a38b2bf&oe=60810646',
        'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131201613_396901934846381_2485056542496354433_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=V2pxEPcnWNUAX_lShqQ&ccb=7-4&oh=f714d7105eb85edfb7271ba316952cba&oe=607F43F8',
        'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/68931337_371559433769256_8311399855410905088_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=5jL5htSA1kQAX-ZZrla&ccb=7-4&oh=5a97bdd35aefd7b7311074d5bddb08b7&oe=607E8FF5'
      ]
    }
  }
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

          {this.state.imageList.map((img) => {
            return < RecommandUser imageObj={img} key={img} />
          })}

          <div className="main-right-friend">
            <button className="darkmode-btn">dark</button>
          </div>
        </div>
      </div>
    )
  }
}

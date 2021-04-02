import React, { Component } from 'react';
import './Story.scss'
import prevImg from '../../../../../images/jonghoLee/previous.png';
import nextImg from '../../../../../images/jonghoLee/next.png';

import StoryItem from './StoryItem';

export default class Story extends Component {
  constructor() {
    super();

    this.state = {
      storyObj_list: [
        {
          index: 0,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/58409361_658608891230300_3625990139232124928_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=fibKKWMHWqIAX82leAF&ccb=7-4&oh=b1faa7128d7adee893124f827c554b7b&oe=6080A6A2',
          nickname: 'one_first',
        },
        {
          index: 1,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104884761_714419612435891_3082398820319266827_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=0TzRQLQBLScAX8lUxHN&ccb=7-4&oh=da20a3c85af82f65de1408908a315f76&oe=607F9384',
          nickname: 'two_secon',
        },
        {
          index: 2,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66650173_2377582695668016_4623967653503959040_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=bLY59p_MIoAAX8zA_W2&ccb=7-4&oh=533c80f6b94ebcb5337e690f146447f9&oe=607F5A79',
          nickname: 'three_3333',
        },
        {
          index: 3,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/153241242_435041407550689_3814507477094660956_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=1jltaj2vjNAAX_BSMot&ccb=7-4&oh=9fb1d9cde1a33a6964cfc483b5f35b3d&oe=6081CEB6',
          nickname: 'four_43',
        },
        {
          index: 4,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/158419737_263341431927860_4396109123449644073_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=vICN8CKh-0MAX8eSXzJ&ccb=7-4&oh=cc0d6b0905a568c03a98e61d2a38b2bf&oe=60810646',
          nickname: 'five_52',
        },
        {
          index: 5,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131201613_396901934846381_2485056542496354433_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=V2pxEPcnWNUAX_lShqQ&ccb=7-4&oh=f714d7105eb85edfb7271ba316952cba&oe=607F43F8',
          nickname: 'six_xxx',
        },
        {
          index: 6,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/68931337_371559433769256_8311399855410905088_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=5jL5htSA1kQAX-ZZrla&ccb=7-4&oh=5a97bdd35aefd7b7311074d5bddb08b7&oe=607E8FF5',
          nickname: 'seven__kk',
        },
        {
          index: 7,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/68931337_371559433769256_8311399855410905088_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=5jL5htSA1kQAX-ZZrla&ccb=7-4&oh=afa170a4c067398ca9fd24d6f79dfe40&oe=60828475',
          nickname: 'eight__sf',
        },
        {
          index: 8,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/58409361_658608891230300_3625990139232124928_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=fibKKWMHWqIAX82leAF&ccb=7-4&oh=b1faa7128d7adee893124f827c554b7b&oe=6080A6A2',
          nickname: 'one_first',
        },
        {
          index: 9,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104884761_714419612435891_3082398820319266827_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=0TzRQLQBLScAX8lUxHN&ccb=7-4&oh=da20a3c85af82f65de1408908a315f76&oe=607F9384',
          nickname: 'two_secon',
        },
        {
          index: 10,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/153241242_435041407550689_3814507477094660956_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=1jltaj2vjNAAX_BSMot&ccb=7-4&oh=9fb1d9cde1a33a6964cfc483b5f35b3d&oe=6081CEB6',
          nickname: 'four_43',
        },
        {
          index: 11,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/158419737_263341431927860_4396109123449644073_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=vICN8CKh-0MAX8eSXzJ&ccb=7-4&oh=cc0d6b0905a568c03a98e61d2a38b2bf&oe=60810646',
          nickname: 'five_52',
        },
        {
          index: 12,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131201613_396901934846381_2485056542496354433_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=V2pxEPcnWNUAX_lShqQ&ccb=7-4&oh=f714d7105eb85edfb7271ba316952cba&oe=607F43F8',
          nickname: 'six_xxx',
        },
        {
          index: 13,
          imageUrl: 'https://instagram.ficn1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/68931337_371559433769256_8311399855410905088_n.jpg?tp=1&_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_ohc=5jL5htSA1kQAX-ZZrla&ccb=7-4&oh=5a97bdd35aefd7b7311074d5bddb08b7&oe=607E8FF5',
          nickname: 'seven__kk',
        },
      ]
    }
  }
  render() {
    return (
      <div className="story-container">


        <ul className="story-list">
          {this.state.storyObj_list.map((story) => {
            return <StoryItem story={story} key={story.index} />
          })}
        </ul>
        <div className="story-btn-box">
          <img className="story-previous" src={prevImg} alt="left-arrow" />
          <img className="story-next" src={nextImg} alt="left-arrow" />
        </div>
      </div>
    )
  }
}

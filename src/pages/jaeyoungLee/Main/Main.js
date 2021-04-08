import React from 'react';
import FeedComponent from './FeedComponent/FeedComponent';
import './Main.scss';
import explore from '../../../images/jaeyoungLee/Main/explore.jpg';
import heart from '../../../images/jaeyoungLee/Main/heart.jpg';
import profile from '../../../images/jaeyoungLee/Main/profile.jpg';
import heungminSon from '../../../images/jaeyoungLee/Main/손흥민.jpg';
class MainJaeyoung  extends React.Component {
    constructor () {
        super();
        this.state = {
            commentFeed : [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/feedData.json', {
          method: 'GET'
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              commentFeed: data,     
            });
          });
      }

    

    render(){
        const { commentFeed } = this.state;
        return(
        <>
        <nav>
            <div className="navcontents">
                <div className="navleft">
                    <div className="navleftcontents">
                        <span className="logo"><i className="fab fa-instagram"></i></span>
                        <h1 className="logoname">westagram</h1>
                    </div>
                </div>
                <div className="navcenter">
                    <div className="navcentercontents">
                        <input className="search" type="text" placeholder="검색"/>
                        <span className="searchimg"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <div className="navright">
                    <div className="navrightcontents">
                        <img className="navexplore" src={explore} alt="탐험"/>
                        <img className="navheart" src={heart} alt="하트"/>
                        <img className="navprofile" src={profile} alt="프로필"/>
                    </div>
                </div>
            </div>
        </nav>
        <div className="main">
            <div className="feeds">
                <div className="story">
                    <div className="storyimgbox">
                        <div className="storycontents">
                            <div className="storyprofile">
                                <div className="storylastbox">
                                    <div className="storylast">
                                        <img className="storyimg1" src={heungminSon} alt="프로필1"/>
                                        <p className="storyp1">손흥민</p>
                                    </div>
                                    <div className="storylast">
                                        <img className="storyimg1" src="https://instagram.famm6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.famm6-1.fna.fbcdn.net&_nc_ohc=mhDR9_0DpXIAX_KX0iq&ccb=7-4&oh=dcbb150241d6b1336dd54a4a20417b2a&oe=608B680F&_nc_sid=712cc3&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4" alt="프로필1"/>
                                        <p className="storyp1">2wo0</p>
                                    </div>
                                    <div className="storylast">
                                        <img className="storyimg1" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/35999304_258159611658935_7092278198804676608_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=et4sZhNbgpAAX-qKBH9&ccb=7-4&oh=0b254f6fb3e4182513c3e20ed1a326d0&oe=608BC5C1&_nc_sid=48a2a6" alt="프로필1"/>
                                        <p className="storyp1">geg</p>
                                    </div>
                                    <div className="storylast">
                                        <img className="storyimg1" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/150675895_144233967522798_7515094658452540248_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xslO4Za0644AX9cwObZ&ccb=7-4&oh=0f5cb82fd80b51b47d74e160e228aa1c&oe=608D7B5E&_nc_sid=48a2a6" alt="프로필1"/>
                                        <p className="storyp1">h._.j</p>
                                    </div>
                                    <div className="storylast">
                                        <img className="storyimg1" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/135771971_1881013862054625_6713353513169410837_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=SxJIiqRh4rcAX8RSLYk&ccb=7-4&oh=6dec08c37a69cb2c2a14f21bc36b5eef&oe=608C0912&_nc_sid=48a2a6" alt="프로필1"/>
                                        <p className="storyp1">idon</p>
                                    </div>
                                    <div className="storylast">
                                        <img className="storyimg1" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/155951500_335125831259326_3729086392261698560_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=3nnTQdlVU98AX_4fVMv&ccb=7-4&oh=4a596fc0e33f2ece37634ae50d38cdde&oe=608C5901&_nc_sid=48a2a6" alt="프로필1"/>
                                        <p className="storyp1">dfewg</p>
                                    </div>
                                    <div className="storylast">
                                        <img className="storyimg1" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/37828240_293117218102022_6759937585105076224_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=jzs6QvrGtHAAX_qFR80&ccb=7-4&oh=f4984cbce61bc445f02622a5468278b3&oe=608B09A1&_nc_sid=57d425" alt="프로필1"/>
                                        <p className="storyp1">33gg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {commentFeed.map(feed =>{
                    return (
                        <FeedComponent key={feed.id} profileimg={feed.profileimg} userName={feed.userName} feedimg={feed.feedimg} feedcontent={feed.feedcontent} />
                    );
                })}
                
            </div>
            <div className="main-right">
                <div className="my_profile">
                    <img className="my_profileimg" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141997127_1523884024669097_6148385093252095280_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=ldPmBqcpW3kAX9esSCC&amp;ccb=7-4&amp;oh=6503a99b1b0096ad362012fef7e72aed&amp;oe=6085537E&amp;_nc_sid=7b02f1" alt="프로필"/>
                    <div className="my_info">
                        <p className="mynickname">2wo0_0</p>
                        <p className="myname">이재영</p>
                    </div>
                    <button className="profile_transform" disabled>전환</button>
                </div>
                <div className="recommendation">
                    <div className="recommendation_header">
                        <p className="recommendation_left">회원님을 위한 추천</p>
                        <p className="recommendation_right">모두 보기</p>
                    </div>
                    <div className="recommendation_info">
                        <div className="recommendation_box">
                            <img className="friend_profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/156650140_116853317083347_8770042214751161261_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=-evbCZABANYAX_WcDzP&amp;edm=AEF8tYYAAAAA&amp;ccb=7-4&amp;oh=5eb6e52a64b2ad8c98bff45dab473831&amp;oe=60880D5B&amp;_nc_sid=a9513d" alt="다른프로필"/>
                            <div className="friend_info">
                                <p className="friend_nickname">ryu_d_g</p>
                                <p className="other_friend">1996yunsi님 외 13명이 팔로우합니다</p>
                            </div>
                            <button className="follow" disabled>팔로우</button>
                        </div>
                        <div className="recommendation_box">
                            <img className="friend_profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/159992110_105322351555148_1839915921172216453_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=xfLIvYCwwiIAX8AJI08&ccb=7-4&oh=7bdaf0e022e88f0dd5079c1995892031&oe=608D9B9E&_nc_sid=57d425" alt="다른프로필"/>
                            <div className="friend_info">
                                <p className="friend_nickname">2s2_f</p>
                                <p className="other_friend">_sihyeon___님 외 49명이 팔로우합니다</p>
                            </div>
                            <button className="follow" disabled>팔로우</button>
                        </div>
                        <div className="recommendation_box">
                            <img className="friend_profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/160716680_272942871038831_8108440433038115559_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VmeF5WmeLg4AX-jiUAL&ccb=7-4&oh=cf29d0253e8afb755a9d26ad13a6deda&oe=608D4A0C&_nc_sid=a9513d" alt="다른프로필"/>
                            <div className="friend_info">
                                <p className="friend_nickname">rdfe_g</p>
                                <p className="other_friend">111_fkdn님 외 5명이 팔로우합니다</p>
                            </div>
                            <button className="follow" disabled>팔로우</button>
                        </div>
                        <div className="recommendation_box">
                            <img className="friend_profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/164274433_776408706413539_3215024154205561736_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=gCCfowKp9OMAX9_NBIP&ccb=7-4&oh=afbada353869184275b4d3be70f38605&oe=608BE909&_nc_sid=a9513d" alt="다른프로필"/>
                            <div className="friend_info">
                                <p className="friend_nickname">cat_2d_g</p>
                                <p className="other_friend">cjdtkseh님 외 15명이 팔로우합니다</p>
                            </div>
                            <button className="follow" disabled>팔로우</button>
                        </div>
                        <div className="recommendation_box">
                            <img className="friend_profile" src=" https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/164520013_834814623778500_398528442563386719_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=iLm66uEJKQ4AX88GkVl&ccb=7-4&oh=4fe271ebb6f627b328cb3d24bb811776&oe=608E6098&_nc_sid=86f79a" alt="다른프로필"/>
                            <div className="friend_info">
                                <p className="friend_nickname">tksdkdnENr</p>
                                <p className="other_friend">cjfcjfgme1님 외 32명이 팔로우합니다</p>
                            </div>
                            <button className="follow" disabled>팔로우</button>
                        </div>
                    </div>
                </div>
                <aside>
                    <ul className="westagram_contents_box">
                        {CONTENTS.map((el,id) =>
                         <li key={id} className="westagram_contents">{el.content}</li>
                        )}
                       
                    </ul>
                    <p className="westagram_facebook">© 2021 INSTAGRAM FROM FACEBOOK</p>
                </aside>
            </div>
        </div>
    </>
        )
    }
}
export default MainJaeyoung ;

const CONTENTS = [
    {id: 1, content: "소개"},
    {id: 2, content: "도움말"},
    {id: 3, content: "홍보 센터"},
    {id: 4, content: "API"},
    {id: 5, content: "채용정보"},
    {id: 6, content: "개인정보처리방침"},
    {id: 7, content: "약관"},
    {id: 8, content: "위치"},
    {id: 9, content: "인기 계정"},
    {id: 10, content: "해시태그"},
    {id: 11, content: "언어"},
]
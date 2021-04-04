import React from 'react';
//import CommentComponent from './CommentComponent/CommentComponent';
import './Main.scss';
import explore from '../../../images/jaeyoungLee/Main/explore.jpg';
import heart from '../../../images/jaeyoungLee/Main/heart.jpg';
import profile from '../../../images/jaeyoungLee/Main/profile.jpg';
import heungminSon from '../../../images/jaeyoungLee/Main/손흥민.jpg';
class MainJaeyoung  extends React.Component {
    constructor () {
        super();
        this.state = {
            commentValue : '',
            commentList : [],
        }
    }

    getCommentValue = (e) => {
        this.setState({
            commentValue : e.target.value
        })
    }

    clickButton = () => {
        this.setState({
            commentList : this.state.commentList.concat(this.state.commentValue),
            commentValue : ''
        })
    }

    enterKey = (e) => {
        if(e.key === 'Enter'){
            this.clickButton();
            this.setState({
                commentValue : ''
            })
        }
    }

   
    
    render(){
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
            <article>
                <div className="articleheader">
                    <div className="articleheadercontents">
                        <img className="headerimg" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=sQeUd39qUKoAX9VnaGA&ccb=7-4&oh=17b03b2b8a140f6c76f50d5dc9fa4bc5&oe=6083E470&_nc_sid=c982ba
                        Request Method: GET" alt="피드프로필"/>
                        <div className="headername">
                            <div className="headerlast">
                                <p className="hname">wecode</p>
                                <span className="hlast"><i className="fas fa-ellipsis-h"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articleimgbox">
                    <img className="articleimg" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/162896348_2049003231907899_4671236219368728456_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=5D9Igvqa1a0AX8tO1KZ&ccb=7-4&oh=432e5e8374a7f075279d22cbefa7481a&oe=6083D466&_nc_sid=c982ba" alt="피드이미지"/>
                </div>
                <div className="article_button">
                    <div className="article_button_left">
                        <svg className="left_button"  height="24" viewBox="0 0 48 48" width="24">
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                        <svg className="left_button"  height="24" viewBox="0 0 48 48" width="24">
                            <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                        </svg>
                        <svg className="left_button"  height="24" viewBox="0 0 48 48" width="24">
                            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                    </div>
                    <div className="article_button_right">
                        <svg className="right_button" height="24" viewBox="0 0 48 48" width="24">
                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                        </svg>
                    </div>
                </div>
                <div className="number_of_likes">
                    <p className="likes_friend"><span className="like_font">2wo0_0</span>님 <span className="like_font">여러 명</span>이 좋아합니다.</p>
                </div>
                <div className="friend_comment">
                    <p className="explanation"><span className="like_font">wecode</span>  코딩이란..</p>
                    <ul className="commentBox">
                        {this.state.commentList.map(comment => <li className="commentBoxList">{comment}</li>)}
                    </ul>
                    {/* <ul>
                    {this.state.commentList.map((comment, index) =>{
                        return <CommentComponent key={index} Comment = {this.state.comment}/>;
                    })}
                    </ul> */}
                </div>
                <div className="time">
                    <p className="a_few_hours_ago">7시간 전</p>
                </div>
                <div className="leave_comment_box">
                    <div className="leave_comment">
                        <span className="smilebox">
                            <svg className="smile" height="24" viewBox="0 0 48 48" width="24">
                                <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                            </svg>
                        </span>
                        <div className="inputbox">
                            <input className="inputcomment" value={this.state.commentValue} onChange={this.getCommentValue}  onKeyPress={this.enterKey} type="text" placeholder="댓글 달기..."/>
                        </div>
                        <div className="posting">
                            <button className="posting_button" type="submit" onClick={this.clickButton}>게시</button>
                        </div>
                    </div>
                </div>
            </article>
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
                    <li className="westagram_contents">소개</li>
                    <li className="westagram_contents">도움말</li>
                    <li className="westagram_contents">홍보 센터</li>
                    <li className="westagram_contents">API</li>
                    <li className="westagram_contents">채용 정보</li>
                    <li className="westagram_contents">개인정보처리방침</li>
                    <br/>
                    <li className="westagram_contents">약관</li>
                    <li className="westagram_contents">위치</li>
                    <li className="westagram_contents">인기 계정</li>
                    <li className="westagram_contents">해시태그</li>
                    <li className="westagram_contents">언어</li>
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
import React from 'react';

import CommentList from './components/CommentList'

import '../Main/Main.scss';

import logoImage from '../../../images/heeyeolKim/Main/logoImage.png'
import story1 from '../../../images/heeyeolKim/Main/story1.png'
import story2 from '../../../images/heeyeolKim/Main/story2.png'
import story3 from '../../../images/heeyeolKim/Main/story3.png'
import story4 from '../../../images/heeyeolKim/Main/story4.png'
import story5 from '../../../images/heeyeolKim/Main/story5.png'
import story6 from '../../../images/heeyeolKim/Main/story6.png'
import story7 from '../../../images/heeyeolKim/Main/story7.png'
import profile2 from '../../../images/heeyeolKim/Main/profile2.png'
import profile from '../../../images/heeyeolKim/Main/profile.png'
import p1 from '../../../images/heeyeolKim/Main/p1.png'
import p2 from '../../../images/heeyeolKim/Main/p2.png'
import p3 from '../../../images/heeyeolKim/Main/p3.png'
import p4 from '../../../images/heeyeolKim/Main/p4.png'
import p5 from '../../../images/heeyeolKim/Main/p5.png'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" import
// headerNav1 from "@fortawesome/home"

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            newComment: "",
            comments: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/commentData.json', {method: 'GET'})
            .then(
                res => res.json()
            )
            .then(data => {
                this.setState({comments: data});
            });
    }

    createNewComment = (e) => {
        //e.preventDefault();
        this.setState({newComment: e.target.value})
    }

    uploadNewComment = () => {
        console.log("before : ", this.state.comments)
        // e.preventDefault(); console.log(this.state.comments.name); let newArr =
        // this.state.comments; console.log("newArr : ", newArr)

        let newArr = this
            .state
            .comments
            .concat(
                {id: this.state.comments.length, name: 'Wecode', content: this.state.newComment}
            );

        console.log("second newArr : ", newArr)

        this.setState({
            comments: newArr,
            newComment: ""
        }, () => console.log("after : ", this.state.comments))
        // console.log(this.state.comments); this.state.comments.push({     name:
        // 'Wecode',     content: this.state.newComment, }) this.setState({newComment:
        // ""})
    }

    render() {
        return (
            <div className="Main">
                <header>
                    <div className="headerContainer">
                        <div className="headerLogo">
                            <img src={logoImage} alt="instagram logo"/>
                        </div>
                        <div className="headerInput">
                            <input type="text" placeholder="검색"/>
                        </div>
                        <div className="headerNav">
                            <i className="fas fa-home"></i>
                            <i className="far fa-paper-plane"></i>
                            <i className="far fa-compass"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-user-circle"></i>
                        </div>
                    </div>
                </header>

                <div className="mainCenter">

                    <main>

                        <article className="story">
                            <ul className="storyIcons">
                                <div>
                                    <li><img src={story1} alt=""/></li>
                                    hereizhere
                                </div>
                                <div>
                                    <li><img src={story2} alt=""/></li>
                                    camellya
                                </div>
                                <div>
                                    <li><img src={story3} alt=""/></li>
                                    wecode
                                </div>
                                <div>
                                    <li><img src={story4} alt=""/></li>
                                    wecoder
                                </div>
                                <div>
                                    <li><img src={story5} alt=""/></li>
                                    hithere
                                </div>
                                <div>
                                    <li><img src={story6} alt=""/></li>
                                    byethere
                                </div>
                                <div>
                                    <li><img src={story7} alt=""/></li>
                                    okayman_
                                </div>
                            </ul>
                        </article>

                        <article className="feed">
                            <section className="author">
                                <div className="authorImage">
                                    <img src={profile2} alt=""/>
                                </div>
                                <div className="authorName">
                                    <span>someone</span>
                                    <span>
                                        <i className="fas fa-ellipsis-h"></i>
                                    </span>
                                </div>
                            </section>
                            <div className="content">
                                <img src={profile} alt=""/>
                            </div>
                            <section className="commentContainer">
                                <div className="emoticon">
                                    <div className="emoticonLeft">
                                        <i className="far fa-heart"></i>
                                        <i className="far fa-comment"></i>
                                        <i className="far fa-paper-plane"></i>
                                    </div>
                                    <div className="emoticonRight">
                                        <i className="far fa-bookmark"></i>
                                    </div>
                                </div>
                                <div className="like">좋아요 564개</div>
                                <div className="comment">
                                    <div className="authorMentionContainer">
                                        <div>
                                            <span className="authorMentionName">someone</span>
                                            <span className="authorMentionComment">내 포즈가 어때?</span>
                                        </div>
                                    </div>
                                    <div className="commentUnfold">
                                        <a href="#!">댓글
                                            <span>16개</span>
                                            모두 보기
                                        </a>
                                    </div>
                                    <div className="replierMentionContainer">
                                        {
                                            this
                                                .state
                                                .comments
                                                .map((comment) => {
                                                    let {id, name, content} = comment;
                                                    // console.log(id)
                                                    return (
                                                        <CommentList key={id} name={name} content={content}/>
                                                    )
                                                    // console.log(e.id);
                                                })
                                        }
                                    </div>
                                </div>
                                <div className="createdTime">
                                    11시간 전
                                </div>
                            </section>
                            <section className="createComment">
                                <div className="createButton">
                                    <div>
                                        <button>
                                            <div className="emoticonButton">
                                                <i className="far fa-smile-wink"></i>
                                            </div>
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="댓글달기..."
                                            value={this.state.newComment}
                                            onChange={this.createNewComment}/>
                                    </div>
                                    <div>
                                        <button className="uploadComment" onClick={this.uploadNewComment}>
                                            <a href="#!">
                                                <span>게시</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </main>

                    <aside>
                        <div className="asideContainer">
                            <div className="asideProfile">
                                <div className="asideProfileContainer">
                                    <div className="asideProfileImage">
                                        <img src={story1} alt=""/>
                                    </div>
                                    <div className="asideProfilename">
                                        <ul>
                                            <li>hereizhere</li>
                                            <li>김희열</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="asideProfileChange">
                                    전환
                                </div>
                            </div>
                            <ul className="asideRecomment">
                                <li className="asideRecommentForMe">회원님을 위한 추천</li>
                                <li className="asideRecommentAll">모두 보기</li>
                            </ul>
                            <ul className="recommentList">
                                <ul className="recommentListLeft">
                                    <li className="recommentListImage">
                                        <img src={p1} alt=""/>
                                    </li>
                                    <li>
                                        <ul className="recommentListCenter">
                                            <li>monday</li>
                                            <li>회원님을 팔로우합니다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li className="recommentListFollow">팔로우</li>
                            </ul>
                            <ul className="recommentList">
                                <ul className="recommentListLeft">
                                    <li className="recommentListImage">
                                        <img src={p2} alt=""/>
                                    </li>
                                    <li>
                                        <ul className="recommentListCenter">
                                            <li>tuesday</li>
                                            <li>회원님을 팔로우합니다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li className="recommentListFollow">팔로우</li>
                            </ul>
                            <ul className="recommentList">
                                <ul className="recommentListLeft">
                                    <li className="recommentListImage">
                                        <img src={p3} alt=""/>
                                    </li>
                                    <li>
                                        <ul className="recommentListCenter">
                                            <li>wednesday</li>
                                            <li>회원님을 팔로우합니다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li className="recommentListFollow">팔로우</li>
                            </ul>
                            <ul className="recommentList">
                                <ul className="recommentListLeft">
                                    <li className="recommentListImage">
                                        <img src={p4} alt=""/>
                                    </li>
                                    <li>
                                        <ul className="recommentListCenter">
                                            <li>thursday</li>
                                            <li>회원님을 팔로우합니다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li className="recommentListFollow">팔로우</li>
                            </ul>
                            <ul className="recommentList">
                                <ul className="recommentListLeft">
                                    <li className="recommentListImage">
                                        <img src={p5} alt=""/>
                                    </li>
                                    <li>
                                        <ul className="recommentListCenter">
                                            <li>friday</li>
                                            <li>회원님을 팔로우합니다.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li className="recommentListFollow">팔로우</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default Main
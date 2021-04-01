import React from 'react';

import '../Main/Main.scss';

import logoImage from '../../../images/heeyeolKim/Main/logoImage.png'
import story1 from '../../../images/heeyeolKim/Main/story1.png'
import story2 from '../../../images/heeyeolKim/Main/story2.png'
import story3 from '../../../images/heeyeolKim/Main/story3.png'
import story4 from '../../../images/heeyeolKim/Main/story4.png'
import story5 from '../../../images/heeyeolKim/Main/story5.png'
import story6 from '../../../images/heeyeolKim/Main/story6.png'
import story7 from '../../../images/heeyeolKim/Main/story7.png'
import wecode from '../../../images/heeyeolKim/Main/wecode.jpg'
import content1 from '../../../images/heeyeolKim/Main/content1.png'
import profile2 from '../../../images/heeyeolKim/Main/profile2.png'
import profile from '../../../images/heeyeolKim/Main/profile.png'
import p1 from '../../../images/heeyeolKim/Main/p1.png'
import p2 from '../../../images/heeyeolKim/Main/p2.png'
import p3 from '../../../images/heeyeolKim/Main/p3.png'
import p4 from '../../../images/heeyeolKim/Main/p4.png'
import p5 from '../../../images/heeyeolKim/Main/p5.png'

class Main extends React.Component {
    render() {
        return (
            <div className = "Main">
                <header>
                    <div className="headerContainer">
                        <div className="headerLogo">
                            <img src={logoImage} alt="instagram logo" />
                        </div>
                        <div className="headerInput">
                            <input type="text" placeholder="검색" />
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
                                    <li><img src={story1} alt="" /></li>
                                    hereizhere
                                </div>
                                <div>
                                    <li><img src={story2} alt="" /></li>
                                    camellya
                                </div>
                                <div>
                                    <li><img src={story3} alt="" /></li>
                                    wecode
                                </div>
                                <div>
                                    <li><img src={story4} alt="" /></li>
                                    wecoder
                                </div>
                                <div>
                                    <li><img src={story5} alt="" /></li>
                                    hithere
                                </div>
                                <div>
                                    <li><img src={story6} alt="" /></li>
                                    byethere
                                </div>
                                <div>
                                    <li><img src={story7} alt="" /></li>
                                    okayman_
                                </div>
                            </ul>
                        </article>
                        <article className="feed">
                            <section className="author">
                                <div className="authorImage">
                                    <img src={wecode} alt="" />
                                </div>
                                <div className="authorName">
                                    <span>_wecode</span>
                                    <span><i className="fas fa-ellipsis-h"></i></span>
                                </div>
                            </section>
                            <div className="content">
                                <img src={content1} alt="" />
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
                                <div className="like">좋아요 1,563개</div>
                                <div className="comment">
                                    <div className="authorMentionContainer">
                                            <div>
                                                <span className="authorMentionName">wecode</span>
                                                <span className="authorMentionComment">다들 안녕?</span>
                                            </div>
                                    </div>
                                    <div className="commentUnfold">
                                        <a href="#!">댓글 <span>22개</span> 모두 보기</a>
                                    </div>
                                    <div className="replierMentionContainer">
                                        <div className="replierMention">
                                            <div>
                                                <span className="replierMentionName">hereizhere</span>
                                                <span className="replierMentionComment">그래 안녕.</span>
                                            </div>
                                            <div className="commentHeart"><i className="far fa-heart"></i></div>
                                        </div>
                                        <div className="replierMention">
                                            <div>
                                                <span className="replierMentionName">Wecoder</span>
                                                <span className="replierMentionComment">Hi! 😊</span>
                                            </div>
                                            <div className="commentHeart"><i className="far fa-heart"></i></div>
                                        </div>
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
                                        <input className="commentInput" type="text" placeholder="댓글달기..." />
                                    </div>
                                    <div>
                                        <button className="uploadComment">
                                            <a href="#!">
                                                <span>게시</span>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </article>
                        <article className="feed">
                            <section className="author">
                                <div className="authorImage">
                                    <img src={profile2} alt="" />
                                </div>
                                <div className="authorName">
                                    <span>someone</span>
                                    <span><i className="fas fa-ellipsis-h"></i></span>
                                </div>
                            </section>
                            <div className="content">
                                <img src={profile} alt="" />
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
                                        <a href="#!">댓글 <span>16개</span> 모두 보기</a>
                                    </div>
                                    <div className="replierMentionContainer">
                                        <div className="replierMention">
                                            <div>
                                                <span className="replierMentionName">hereizhere</span>
                                                <span className="replierMentionComment">그냥 그래.</span>
                                            </div>
                                            <div className="commentHeart"><i className="far fa-heart"></i></div>
                                        </div>
                                        
                                        
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
                                        <input type="text" placeholder="댓글달기..." />
                                    </div>
                                    <div>
                                        <button className="uploadComment">
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
                        
                        <div className = "asideContainer">
                            <div className="asideProfile">
                                <div className="asideProfileContainer">
                                    <div className="asideProfileImage">
                                        <img src={story1} alt="" />
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
                                        <img src={p1} alt="" />
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
                                        <img src={p2} alt="" />
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
                                        <img src={p3} alt="" />
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
                                        <img src={p4} alt="" />
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
                                        <img src={p5} alt="" />
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
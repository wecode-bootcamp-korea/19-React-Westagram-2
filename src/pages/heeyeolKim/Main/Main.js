import React from 'react';

import FeedList from './components/FeedList';
import Story from './components/Story';

import logoImage from '../../../images/heeyeolKim/Main/logoImage.png'
import story1 from '../../../images/heeyeolKim/Main/story1.png'
// import story2 from '../../../images/heeyeolKim/Main/story2.png'
// import story3 from '../../../images/heeyeolKim/Main/story3.png'
// import story4 from '../../../images/heeyeolKim/Main/story4.png'
// import story5 from '../../../images/heeyeolKim/Main/story5.png'
// import story6 from '../../../images/heeyeolKim/Main/story6.png'
// import story7 from '../../../images/heeyeolKim/Main/story7.png'
import p1 from '../../../images/heeyeolKim/Main/p1.png'
import p2 from '../../../images/heeyeolKim/Main/p2.png'
import p3 from '../../../images/heeyeolKim/Main/p3.png'
import p4 from '../../../images/heeyeolKim/Main/p4.png'
import p5 from '../../../images/heeyeolKim/Main/p5.png'

import '../Main/Main.scss';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            newComment: "",
            comments: [],
            feeds: [],
            storys: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/commentData.json', {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                this.setState({comments: data});
            });

        fetch('http://localhost:3000/data/feedData.json', {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                this.setState({feeds: data});
        });

        fetch('/data/storyData.json', {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                this.setState({storys: data});
            });
    }

    createNewComment = (e) => {
        this.setState({newComment: e.target.value});
    }

    uploadNewComment = () => {
        const { comments, newComment } = this.state;
        const newArr = {
            id: comments.length + 1, 
            name: 'Wecode', 
            content: newComment
        };

        if (newComment) {
            this.setState({
                comments: [...comments, newArr],
                newComment: ""
            })
        }
    }

    render() {
        const {id, name, content} = this.state.comments;
        return (
            <div className="Main">
                <header>
                    <div className="headerContainer">
                        <div className="headerLogo">
                            <img src={logoImage} alt="instagram logo"/>
                        </div>
                        <div className="headerInput">
                            <input type="text" placeholder="??????"/>
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
                                {
                                    this.state.storys.map((story) => {
                                        const { id, storyImage, storyName } = story;
                                        return (
                                            <Story 
                                            key = {id}
                                            storyImage = {storyImage}
                                            storyName = {storyName}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </article>
                        { this.state.feeds.map((feed) => {
                            const {id, authorProfile, authorName, feedContent, liked, authorMention, unfoldComments, timeBefore} = feed;
                            return (<FeedList
                                key = {id}
                                name = {name}
                                content = {content}
                                newComment = {this.state.newComment}
                                comments = {this.state.comments}
                                createNewComment = {this.createNewComment}
                                uploadNewComment = {this.uploadNewComment}
                                authorName = {authorName}
                                authorProfile = {authorProfile}
                                feedContent = {feedContent}
                                liked = {liked}
                                authorMention = {authorMention}
                                unfoldComments = {unfoldComments}
                                timeBefore = {timeBefore}
                            />
                            )
                            })
                        }
                    </main>
                    <aside>
                        <div className="asideContainer">
                            <div className="asideProfile">
                                <div className="asideProfileContainer">
                                    <div className="asideProfileImage">
                                        <img src={story1} alt="????????? ?????? ??? ????????????."/>
                                    </div>
                                    <div className="asideProfilename">
                                        <ul>
                                            <li>hereizhere</li>
                                            <li>?????????</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="asideProfileChange">
                                    ??????
                                </div>
                            </div>
                            <ul className="asideRecomment">
                                <li className="asideRecommentForMe">???????????? ?????? ??????</li>
                                <li className="asideRecommentAll">?????? ??????</li>
                            </ul>
                            <ul className="recommentList">
                                <li className="recommentListLeft">
                                    <span className="recommentListImage">
                                        <img src={p1} alt="????????? ?????? ??? ????????????."/>
                                    </span>
                                    <span>
                                        <ul className="recommentListCenter">
                                            <li>monday</li>
                                            <li>???????????? ??????????????????.</li>
                                        </ul>
                                    </span>
                                </li>
                                <li className="recommentListFollow">?????????</li>
                            </ul>
                            <ul className="recommentList">
                                <li className="recommentListLeft">
                                    <span className="recommentListImage">
                                        <img src={p2} alt="????????? ?????? ??? ????????????."/>
                                    </span>
                                    <span>
                                        <ul className="recommentListCenter">
                                            <li>tuesday</li>
                                            <li>???????????? ??????????????????.</li>
                                        </ul>
                                    </span>
                                </li>
                                <li className="recommentListFollow">?????????</li>
                            </ul>
                            <ul className="recommentList">
                                <li className="recommentListLeft">
                                    <span className="recommentListImage">
                                        <img src={p3} alt="????????? ?????? ??? ????????????."/>
                                    </span>
                                    <span>
                                        <ul className="recommentListCenter">
                                            <li>wednesday</li>
                                            <li>???????????? ??????????????????.</li>
                                        </ul>
                                    </span>
                                </li>
                                <li className="recommentListFollow">?????????</li>
                            </ul>
                            <ul className="recommentList">
                                <li className="recommentListLeft">
                                    <span className="recommentListImage">
                                        <img src={p4} alt="????????? ?????? ??? ????????????."/>
                                    </span>
                                    <span>
                                        <ul className="recommentListCenter">
                                            <li>thursday</li>
                                            <li>???????????? ??????????????????.</li>
                                        </ul>
                                    </span>
                                </li>
                                <li className="recommentListFollow">?????????</li>
                            </ul>
                            <ul className="recommentList">
                                <li className="recommentListLeft">
                                    <span className="recommentListImage">
                                        <img src={p5} alt="????????? ?????? ??? ????????????."/>
                                    </span>
                                    <span>
                                        <ul className="recommentListCenter">
                                            <li>friday</li>
                                            <li>???????????? ??????????????????.</li>
                                        </ul>
                                    </span>
                                </li>
                                <li className="recommentListFollow">?????????</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default Main
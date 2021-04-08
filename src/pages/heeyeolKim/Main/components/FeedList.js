import React, {Component} from 'react';

import CommentList from './CommentList'

import profile2 from '../../../../images/heeyeolKim/Main/profile2.png'
import profile from '../../../../images/heeyeolKim/Main/profile.png'

import './FeedList.scss'

class FeedList extends Component {
    componentDidMount() {
        fetch('http://localhost:3000/data/commentData.json', {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                this.setState({comments: data});
            });
    }

    render() {
        return (
            <article className="feed">
                <section className="author">
                    <div className="authorImage">
                        <img src={this.props.authorProfile} alt="사진을 찾을 수 없습니다."/>
                    </div>
                    <div className="authorName">
                        <span>{this.props.authorName}</span>
                        <span>
                            <i className="fas fa-ellipsis-h"></i>
                        </span>
                    </div>
                </section>
                <div className="content">
                    <img src={this.props.feedContent} alt="사진을 찾을 수 없습니다."/>
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
                    <div className="like">{this.props.liked}</div>
                    <div className="comment">
                        <div className="authorMentionContainer">
                            <div>
                                <span className="authorMentionName">{this.props.authorName}</span>
                                <span className="authorMentionComment">{this.props.authorMention}</span>
                            </div>
                        </div>
                        <div className="commentUnfold">
                            <a href="#">{this.props.unfoldComments}</a>
                        </div>
                        <div className="replierMentionContainer">
                            {
                                this.props.comments.map((comment) => {
                                        const {id, name, content} = comment;
                                        return (<CommentList 
                                            key={id}
                                            name={name}
                                            content={content}
                                            />)
                                })
                            }
                        </div>
                    </div>
                    <div className="createdTime">
                    {this.props.timeBefore}
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
                                value={this.props.newComment}
                                onChange={this.props.createNewComment}/>
                        </div>
                        <div>
                            <button className="uploadComment" onClick={this.props.uploadNewComment}>
                                <a href="#!">
                                    <span>게시</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default FeedList;
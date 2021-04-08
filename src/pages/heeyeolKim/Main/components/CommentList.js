import React, {Component} from 'react';

import './CommentList.scss'

class CommentList extends Component {
    render() {
        const {name, content} = this.props;
        return (
            <li className="replierMention">
                <span className="replierMentionName">{name}</span>
                <span className="replierMentionComment">{content}</span>
            </li>
        );
    }
}

export default CommentList;
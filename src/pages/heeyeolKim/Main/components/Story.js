import React, {Component} from 'react';

import './Story.scss'

class Story extends Component {

    render() {
        const { storyImage, storyName } = this.props;
        return (
            <div>
                <li><img src={storyImage} alt="사진을 찾을 수 없습니다."/></li>
                {storyName}
            </div>
        );
    }
}

export default Story;
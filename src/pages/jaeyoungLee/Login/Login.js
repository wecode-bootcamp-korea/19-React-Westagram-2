import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginJaeyoung  extends React.Component {
    constructor () {
        super();
        this.state = {
            idValue : '',
            psValue : '',
        };
    }

    handleIdInput = (e) => {
        this.setState({
            idValue : e.target.value
        })
    }

    handlePsInput = (e) => {
        this.setState({
            psValue : e.target.value
        })
    }

    // checkLoginStatus = () => {
    //     const { idValue , psValue , loginBt } = this.state
    //     idValue.includes('@') && psValue.length > 5 ? this.setState({loginBt : false}) : this.setState({loginBt : true});
    // }

    goToMain = () => {
        this.props.history.push('/main-jaeyoung')
    }

    render () {
        const { idValue , psValue } = this.state
        const { handleIdInput , handlePsInput } = this

        return (
            <div className="loginContainer">
                <div className="logoName">
                    <h1>Instargram</h1>
                </div>
                <div className="loginInfo">
                    <input type="text" value={idValue} onChange={handleIdInput} className="loginId" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input type="password" value={psValue} onChange={handlePsInput} className="loginPs" placeholder="비밀번호"/>
                    <button className="loginBt" onClick={this.goToMain} disabled={idValue.includes('@') && psValue.length > 5 ? false : true}>로그인</button>
                </div>
                <div className="forgetPassword">
                    <a href="https://www.naver.com/">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        )
    }
}

export default withRouter( LoginJaeyoung );
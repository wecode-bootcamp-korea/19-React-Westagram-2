import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginJaeyoung  extends React.Component {
    goToMain = () => {
        this.props.history.push('/main')
    }
    render () {
        return (
        <div className="loginContainer">
            <div className="logoName">
                <h1>Instargram</h1>
            </div>
            <div className="loginInfo">
                <input type="text" className="loginId" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input type="password" className="loginPs" placeholder="비밀번호"/>
                <button className="loginBt" onClick={this.goToMain}>로그인</button>
            </div>
            <div className="forgetPassword">
                <a href="https://www.naver.com/">비밀번호를 잊으셨나요?</a>
            </div>
        </div>)
    }
}

export default withRouter( LoginJaeyoung );
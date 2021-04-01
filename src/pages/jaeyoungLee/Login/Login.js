import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginJaeyoung  extends React.Component {
    constructor () {
        super();
        this.state = {
            target : '',
            target2 : '',
        };
    }
    handleIdInput = (e) => {
        this.setState({
            target : e.target.value
        })
        console.log(e.target.value);
    }
    handlePsInput = (e) => {
        this.setState({
            target2 : e.target.value
        })
        console.log(e.target.value);
    }
    goToMain = () => {
        this.props.history.push('/main-jaeyoung')
    }

    render () {
        return (
        <div className="loginContainer">
            <div className="logoName">
                <h1>Instargram</h1>
            </div>
            <div className="loginInfo">
                <input type="text" value={this.state.target} onChange={this.handleIdInput} className="loginId" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input type="password" value={this.state.target2} onChange={this.handlePsInput} className="loginPs" placeholder="비밀번호"/>
                <button className="loginBt" onClick={this.goToMain}>로그인</button>
            </div>
            <div className="forgetPassword">
                <a href="https://www.naver.com/">비밀번호를 잊으셨나요?</a>
            </div>
        </div>)
    }
}

export default withRouter( LoginJaeyoung );
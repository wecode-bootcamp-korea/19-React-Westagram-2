import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';


class LoginJaeyoung  extends React.Component {
    constructor () {
        super();
        this.state = {
            id: '',
            pw : '',
        };
    }

    handleInput = (e) => {
        const { name,value} = e.target;
        this.setState({
            [name]: value
        })
    }
    
    goToMain = () => {
        this.props.history.push('/main-jaeyoung')
    }


    render () {
        const { handleInput } = this
        const isBtnAble = this.state.id.includes('@') && this.state.pw.length >= 5;


        return (
            <div className="loginContainer">
                <div className="logoName">
                    <h1>Instargram</h1>
                </div>
                <div className="loginInfo">
                    <input type="text" name="id" onChange={handleInput} className="loginId" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input type="password" name="pw" onChange={handleInput} className="loginPs" placeholder="비밀번호"/>
                    <button className="loginBt" onClick={this.goToMain} disabled={!isBtnAble}>로그인</button>
                </div>
                <div className="forgetPassword">
                    <a href="https://www.naver.com/">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        )
    }
}

export default withRouter( LoginJaeyoung );
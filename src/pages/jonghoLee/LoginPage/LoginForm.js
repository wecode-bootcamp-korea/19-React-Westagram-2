import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../reset.css';
import '../common.scss';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      login_id: "",
      login_pw: "",
      isAbled: true,
    };
  }

  goToMain = (e) => {
    e.preventDefault()
    this.props.history.push('/main');
  }

  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    }, () => {
      this.loginCheck();
    });
  }

  loginCheck = () => {
    const { login_id, login_pw } = this.state;
    this.setState({ isAbled: !(login_id.includes("@") && login_pw.length >= 5) })
  };

  render() {
    return (
      <form className="login_form" action="">
        <div className="login_id_div">
          <span className="login_id_span">전화번호, 사용자 이름 또는 이메일</span>
          <input id="login_id" type="text" onChange={this.handleInput} />
        </div>
        <div className="login_pw_div">
          <span className="login_pw_span">비밀번호</span>
          <input id="login_pw" type="password" onChange={this.handleInput} />
        </div>
        <p className="view_password">비밀번호 표시</p>

        <button type="submit" className="login_btn" onClick={this.goToMain} disabled={this.state.isAbled} >로그인</button>
      </form>
    )
  }
}

export default withRouter(LoginForm);

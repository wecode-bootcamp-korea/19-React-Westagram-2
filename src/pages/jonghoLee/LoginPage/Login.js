import { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <>
        <div className="login_flex">
          <section className="login_container">
            <h1 className="login_title">Westagram</h1>
            <LoginForm />
            <a className="reset_pw_a" href="https://naver.com">비밀번호를 잊으셨나요?</a>
          </section>
        </div>
      </>
    )
  }
}

export default Login;
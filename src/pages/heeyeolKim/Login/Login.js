import React from 'react';

import { withRouter } from 'react-router-dom';

import appStore1 from '../../../images/heeyeolKim/Login/appStore1.png';
import googlePlay2 from '../../../images/heeyeolKim/Login/googlePlay2.png';
import loginPageImage from '../../../images/heeyeolKim/Login/loginPageImage.png';
import logoImage from '../../../images/heeyeolKim/Login/logoImage.png'

import '../Login/Login.scss';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            idValue: "",
            pwValue: "",
            buttonToGo: "buttonOff",
        }
    }

    handleActivation = () => {
        const { idValue, pwValue } = this.state;
        let isLoginValid = idValue.includes("@") && pwValue.length >= 5;

        isLoginValid ? this.setState({buttonToGo: "buttonOn"}) : this.setState({buttonToGo: "buttonOff"})
    }

    // handleInput = (e) => {
    //     const {type, name, value} = e.target;
    //     if (type === "text") {
    //         this.setState({
    //             idValue: value
    //         });
    //     } else if (type === "password") {
    //         this.setState({
    //             pwValue: value
    //         });
    //     }
    // }

    handleInput = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    goToMain = () => {
        fetch('http://10.58.5.70:8000/user/login', 
        {method: 'POST', 
        body: JSON.stringify({
            email: this.state.idValue,
            password: this.state.pwValue,
        })
        })
        .then((res) => {
            console.log(res);
            return res.json();})
        .then((data) => {
            console.log("결과: ", data);
            if (data.MESSAGE === "SUCCESS") {
                this.props.history.push('/main-heeyeol')
                } else {
                    alert("실패!");
                }
        });
    }

    render() {
        return (
            <div className = "Login">
                <main className="mainSection">
                    <section className="leftImage" >
                        <img src={loginPageImage} alt="사진을 찾을 수 없습니다." />
                    </section>
                
                    <section className="rightLoginPage">
                        <section className="logIn">
                            <h1>
                                <img src={logoImage} alt="사진을 찾을 수 없습니다." />
                            </h1>
                            <div className="logInMain" onKeyUp={this.handleActivation}>
                                <input 
                                className="changeColorId" 
                                name = "email"
                                type="text" 
                                placeholder="전화번호, 사용자 이름 또는 아이디"
                                onChange = {this.handleInput}
                                />
                                <input 
                                className="changeColorPw"
                                name = "password"
                                type="password" 
                                placeholder="비밀번호"
                                onChange = {this.handleInput}
                                />
                                <button 
                                style={{opacity: this.state.buttonOpacity}}
                                className={this.state.buttonToGo}
                                onClick={this.goToMain}>
                                    <div>로그인</div>
                                </button>
                                <div className="dividers">
                                    <div className="textDivider"></div>
                                    <div className="dividerText">또는</div>
                                    <div className="textDivider"></div>
                                </div>
                                <button className="facebookButton">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span>Facebook으로 로그인</span>
                                </button>
                            </div>
                            <a className="forgotPassword" href="https://www.instagram.com/accounts/password/reset/">
                                비밀번호를 잊으셨나요?
                            </a>
                        </section>
            
                        <section className="signUp">
                            <div className="signUpCheck">
                                    계정이 없으신가요?
                                    <span>가입하기</span>
                            </div>
                        </section>
                
                        <section className="appDownload">
                            <div>
                                <p>앱을 다운로드하세요.</p>
                                <div className="appImage">
                                    <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                                        <div className="appleStore">
                                            <img src={appStore1} alt="사진을 찾을 수 없습니다." />
                                        </div>
                                    </a>
                                    <a className="googlePlayLink" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF26B438C-1346-44AC-83A1-04C3DAEDF1C2%26utm_content%3Dlo%26utm_medium%3Dbadge">
                                        <div className="googlePlay">
                                            <img src={googlePlay2} alt="사진을 찾을 수 없습니다." />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                </main>

                <footer>
                    <div>
                        <ul>
                            <li>소개</li>
                            <li>블로그</li>
                            <li>채용 정보</li>
                            <li>API</li>
                            <li>개인정보처리방침</li>
                            <li>약관</li>
                            <li>인기 계정</li>
                            <li>해시태그</li>
                            <li>위치</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>뷰티</li>
                            <li>댄스 및 공연</li>
                            <li>피트니스</li>
                            <li>식음료</li>
                            <li>집 및 정원</li>
                            <li>음악</li>
                            <li>시각 예술</li>
                        </ul>
                    </div>
                    <div className="source">
                        <select className="chooseLanguage" name="language">
                            <option value="first" selected>한국어</option>
                            <option value="second">English</option>
                            <option value="third">Spanish</option>
                        </select>
                        <span>
                            © 2021 Instagram from Facebook
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withRouter(Login);
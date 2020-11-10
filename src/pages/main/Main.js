import React from 'react';
import '../../styles/Main.css';
import kakaoLogo from '../../images/kakaoLogo.PNG'

const Main = () => {
  return (
    <>
    <div id="wrap">
        <div id="main">
            <div>
                <img src={kakaoLogo}/>
            </div>
            <div id = "login">
                <div id = "login_input">
                    <input type="text" placeholder="카카오계정"/>
                    <input type="password" placeholder="비밀번호"/>
                </div>
                <div id = "login_button">
                    <button><p>로그인</p></button>
                </div>
                <div id="login_auto">
                    <input type="checkbox"/> <p>자동로그인</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Main;

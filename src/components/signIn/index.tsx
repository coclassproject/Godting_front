import React, { useEffect } from 'react';
import useKakaoLogin from 'src/hooks/useKakaoLogin';
import useNaverLogin from 'src/hooks/useNaverLogin';
import { Container } from './style';
import KakaoLoginButton from '../../../public/kakao.svg';
import NaverLoginButton from '../../../public/naver.svg';
import GoogleLoginButton from '../../../public/google.svg';
import Logo from '../../../public/logo.svg';

const SignInCompoent = () => {
  useKakaoLogin();
  useNaverLogin();

  useEffect(() => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/sign_in',
      isPopup: false,
      loginButton: { color: 'green', type: 1, height: 60 },
    });
    naverLogin.init();
  }, []);

  const onClickKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/sign_in',
    });
  };

  const onClickNaverLogin = () => {
    const naverLoginButton = document.getElementById('naverIdLogin_loginButton');

    if (naverLoginButton) naverLoginButton.click();
  };

  return (
    <Container>
      <div className="logo">
        <Logo width="84" height="88" />
      </div>
      <div className="text">
        <span>간편하게 로그인하고</span>
        <br />
        <span>갓팅 서비스를 즐겨보세요!</span>
      </div>
      <KakaoLoginButton onClick={onClickKakaoLogin} />
      <NaverLoginButton onClick={onClickNaverLogin} />
      <GoogleLoginButton />
      <div id="naverIdLogin" style={{ display: 'none' }} />
    </Container>
  );
};

export default SignInCompoent;

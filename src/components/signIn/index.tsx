import React from 'react';
import useKakaoLogin from 'src/hooks/useKakaoLogin';
import { Container } from './style';
import KakaoLoginButton from '../../../public/kakao.svg';
import NaverLoginButton from '../../../public/naver.svg';
import GoogleLoginButton from '../../../public/google.svg';
import Logo from '../../../public/logo.svg';

const SignInCompoent = () => {
  useKakaoLogin();
  const onClickKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/sign_in',
    });
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
      <NaverLoginButton />
      <GoogleLoginButton />
    </Container>
  );
};

export default SignInCompoent;

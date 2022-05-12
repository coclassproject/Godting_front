import React from 'react';
import { Container } from './style';

const SignInCompoent = () => (
  <Container>
    <div className="text">
      <span>간편하게 로그인하고</span>
      <br />
      <span>갓팅 서비스를 즐겨보세요</span>
    </div>
    <img src="/kakao.png" alt="kakao login button" />
    <img src="/naver.png" alt="naver login button" />
    <img src="/kakao.png" alt="google login button" />
  </Container>
);

export default SignInCompoent;

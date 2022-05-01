import styled from '@emotion/styled';
import React from 'react';
import Layout from 'src/components/shared/Layout';

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);

  .text {
    font-size: 1.2rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    line-height: 1.8rem;
    margin-bottom: 2rem;

    span:nth-of-type(2) {
      font-weight: bold;
    }
  }

  img {
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
`;

const SignIn = () => (
  <Layout noMenu noNav>
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
  </Layout>
);

export default SignIn;

import styled from '@emotion/styled';
import React from 'react';
import Layout from 'src/components/shared/Layout';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .text {
    text-align: center;
    font-size: 1.2rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    line-height: 1.8rem;
    margin-bottom: 1rem;

    span:nth-of-type(2) {
      font-weight: bold;
    }
  }

  img {
    margin-bottom: 0.8rem;
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
      <img src="/kakao.png" alt="kakao login button" />
      <img src="/kakao.png" alt="kakao login button" />
      {/* <img src="/naver.png" alt="naver login button" /> */}
    </Container>
  </Layout>
);

export default SignIn;

import React from 'react';
import Layout from 'src/components/shared/Layout';
import styled from '@emotion/styled';
import { BsFillPlusCircleFill, BsPlusCircle } from 'react-icons/bs';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const PublicContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem 1.2rem;

  h1 {
    color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    margin-bottom: 0.5rem;
  }
`;

const QualificationContainer = styled(PublicContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  cursor: pointer;

  div {
    opacity: 0.2;
    margin-right: 0.3rem;
    padding-top: 0.1rem;
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    font-weight: 500;
  }
`;

const MemberContainer = styled(PublicContainer)`
  .me {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    div {
      width: 110px;
      height: 110px;
      border-radius: 999px;
      border: 1px solid black;
    }
  }

  .friends {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    opacity: 0.1;
  }
`;

const HistoryContainer = styled(PublicContainer)`
  height: 150px;

  & > textarea {
    width: 100%;
    height: 80%;
    resize: none;
    border: none;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    }
  }
`;

const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  color: ${(props) => props.theme.PUBLIC_WHITE};
  height: 50px;
  border: none;
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

const TeamNew = () => (
  <Layout bgColor back title="새 미팅방">
    <Container>
      <QualificationContainer>
        <div>
          <BsFillPlusCircleFill size="1.2rem" />
        </div>
        <span>조건 설정하기</span>
      </QualificationContainer>
      <MemberContainer>
        <h1>내 멤버</h1>
        <div className="me">
          <div />
        </div>
        <div className="friends">
          <BsPlusCircle size="18%" />
          <BsPlusCircle size="18%" />
          <BsPlusCircle size="18%" />
        </div>
      </MemberContainer>
      <HistoryContainer>
        <h1>최근</h1>
      </HistoryContainer>
      <HistoryContainer>
        <h1>인사말</h1>
        <textarea maxLength={25} minLength={0} placeholder="내용을 입력해주세요(최대25자, 공백포함)" />
      </HistoryContainer>
      <Button>팀 만들기</Button>
    </Container>
  </Layout>
);

export default TeamNew;

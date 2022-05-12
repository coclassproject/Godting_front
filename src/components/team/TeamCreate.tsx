import { useRouter } from 'next/router';
import React from 'react';
import { BsFillPlusCircleFill, BsPlusCircle } from 'react-icons/bs';
import { Button, Container, HistoryContainer, MemberContainer, QualificationContainer } from './style';

const TeamCreateComponent = () => {
  const router = useRouter();
  const moveQualificationPage = () => router.push('/team/qualification');
  return (
    <Container>
      <QualificationContainer>
        <div>
          <BsFillPlusCircleFill size="1.2rem" />
        </div>
        <span onClick={moveQualificationPage}>조건 설정하기</span>
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
  );
};

export default TeamCreateComponent;

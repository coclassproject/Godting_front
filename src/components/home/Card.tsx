import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
  justify-content: center;
`;

const CardSubContainer = styled.div`
  border-radius: 10px;
  width: 185px;
  height: 240px;
  float: left;
  margin: 6px;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 4.41%, rgba(3, 3, 3, 0.22) 100%);
`;
const CardButton = styled.button`
  position: absolute;
  left: 130px;
  bottom: 200px;
`;

const CardOld = styled.span`
  position: absolute;
  right: 135px;
  top: 180px;
  color: white;
`;
const CardHeight = styled.span`
  position: absolute;
  right: 120px;
  top: 200px;
  color: white;
`;
//

const RegisterCard = styled.div`
  border-radius: 10px;
  width: 175px;
  height: 230px;
  float: left;
  margin: auto;
  justify-content: center;
  position: absolute;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.08);
  text-align: center;
`;
const RegisterImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgrey;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const RegisterNick = styled.span`
  position: absolute;
  font-weight: bold;
  display: block;
  color: grey;
  align: center;
`;
const RegisterLecture = styled.span`
  position: absolute;
  display: block;
  font-size: 15px;
  color: grey;
`;
const RegisterInfo = styled.span`
  position: absolute;
  display: block;
  color: lightgrey;
  align: center;
`;
const Span = styled.span`
  display: block;
`;

const Card = () => (
  <>
    <CardContainer>
      <CardSubContainer>
        <CardButton>하트</CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <CardSubContainer>
        <CardButton>하트</CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <CardSubContainer>
        <CardButton>하트</CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <CardSubContainer>
        <CardButton>하트</CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
    </CardContainer>
    <br /> <br /> <br />
    <CardContainer>
      <Span>#최근에 가입한 친구들</Span>
      <RegisterCard>
        <RegisterImg />
        <RegisterNick>햄찌</RegisterNick> <br />
        <br />
        <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
        <br />
        <br />
        <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
        <br />
      </RegisterCard>
      <RegisterCard>
        <RegisterImg />
        <RegisterNick>햄찌</RegisterNick> <br />
        <br />
        <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
        <br />
        <br />
        <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
        <br />
      </RegisterCard>
    </CardContainer>
  </>
);

export default Card;

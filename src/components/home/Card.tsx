import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';

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
  width: 34px;
  height: 34px;
  left: 140px;
  bottom: 200px;
  border-radius: 100%;
  color: #f5f5f5;
  background-color: white;
  border: 1px solid #f5f5f5;
  cursor: pointer;
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

const RegisterContainer = styled.div`
  width: 400px;
  height: 300px;
  float: left;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

const RegisterSubContainer = styled.div`
  width: 175px;
  height: 100px;
  justify-content: center;
  text-align: center;
  display: table-cell;
  flex-direction: column;
`;

const RegisterCard = styled.div`
  border-radius: 10px;
  width: 175px;
  height: 230px;
  float: left;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin: 6px;
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
  font-weight: bold;
  color: grey;
  text-align: center;
  vertical-align: middle;
`;
const RegisterLecture = styled.span`
  font-size: 15px;
  color: grey;
  vertical-align: middle;
  text-align: center;
`;
const RegisterInfo = styled.span`
  color: lightgrey;
  vertical-align: middle;
  text-align: center;
`;
const Span = styled.div`
  margin-bottom: 20px;
  padding-top: 40px;
`;

const Card = () => (
  <>
    <CardContainer>
      <CardSubContainer>
        <CardButton>
          <AiOutlineHeart size="20" />
        </CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <CardSubContainer>
        <CardButton>
          <AiOutlineHeart size="20" />
        </CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <CardSubContainer>
        <CardButton>
          <AiOutlineHeart size="20" />
        </CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <CardSubContainer>
        <CardButton>
          <AiOutlineHeart size="20" />
        </CardButton>
        <CardOld> 23세</CardOld>
        <CardHeight> 162cm</CardHeight>
      </CardSubContainer>
      <Span>#최근에 가입한 친구들</Span>
      <RegisterContainer>
        <RegisterCard>
          <RegisterImg />
          <RegisterSubContainer>
            <RegisterNick>햄찌</RegisterNick> <br />
            <br />
            <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
            <br />
            <br />
            <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
            <br />
          </RegisterSubContainer>
        </RegisterCard>
        <RegisterCard>
          <RegisterImg />
          <RegisterSubContainer>
            <RegisterNick>햄찌</RegisterNick> <br />
            <br />
            <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
            <br />
            <br />
            <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
            <br />
          </RegisterSubContainer>
        </RegisterCard>
      </RegisterContainer>
    </CardContainer>
  </>
);

export default Card;

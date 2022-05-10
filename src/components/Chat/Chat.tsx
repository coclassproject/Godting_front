import React from 'react';
import { BsImage } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import {
  BubbleLeft,
  BubbleRight,
  ChatContainer,
  ChatDiv,
  ChatInput,
  ChatSubject,
  Circle,
  Container,
  MeContainer,
  OtherContainer,
} from './style';

const ChatDetail = () => (
  <>
    <Container>
      <ChatSubject>
        <span className="subject">잘부탁드립니다잘부탁드립니다 잘부탁드립니다잘부탁드립</span>
      </ChatSubject>
      <div className="day">2022년 03월 10일</div>
      <OtherContainer>
        <Circle />
        <div className="content">
          <span className="nick">치즈</span>
          <BubbleLeft>
            <span className="chat">잘부탁드립니다잘부탁드립니다잘부탁드립니다 있습니다.</span>
          </BubbleLeft>
          <span className="time">오후 04:12</span>
        </div>
      </OtherContainer>

      <MeContainer>
        <div className="content">
          <span className="nick-right">치즈</span>
          <BubbleRight>
            <span className="chat">잘부탁드립니다잘부탁드립니다잘부탁드립니다 있습니다.</span>
          </BubbleRight>
          <span className="time-right">오후 04:13</span>
        </div>
        <Circle />
      </MeContainer>
      <ChatContainer>
        <ChatDiv>
          <ChatInput type="text" placeholder="메시지 보내기..." />
          <div className="files">
            <AiOutlineLink size="23px" />
            <BsImage size="23px" />
          </div>
        </ChatDiv>
      </ChatContainer>
    </Container>
  </>
);
export default ChatDetail;

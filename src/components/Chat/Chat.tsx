import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BubbleLeft, BubbleRight, ChatSubject, Circle, Container, MeContainer, OtherContainer } from './style';

const ChatDetail = () => (
  <>
    <Container>
      <ChatSubject>
        <span className="subject">잘부탁드립니다잘부탁드립니다 잘부탁드립니다잘부탁드립</span>
      </ChatSubject>
      <div className="day">2022년 03월 10일</div>
      <OtherContainer>
        <Circle />
        <span className="nick">치즈</span>
        <BubbleLeft>
          <span>잘부탁드립니다잘부탁드립니다잘부탁드립니다 있습니다.</span>
        </BubbleLeft>
        <span className="time">오후 04:12</span>
      </OtherContainer>

      <MeContainer>
        <BubbleRight>
          <span>잘부탁드립니다잘부탁드립니다잘부탁드립니다 있습니다.</span>
        </BubbleRight>
        <span className="nick">치즈</span>
        <Circle />
      </MeContainer>
    </Container>
  </>
);
export default ChatDetail;

import React, { useState } from 'react';
import { ChatListBox, Container } from './style';

const ChatList = () => (
  <>
    <Container>
      <ChatListBox>
        <div className="wrap">
          <div className="tab1">
            <span className="subject">내용을 입력해주세요.</span>
            <span className="number">4:4</span>
          </div>
          <div className="tab2">
            <span className="content">앗 그럼 그 장소에서 뵙겠습니다 같은 대학생끼리 만...</span>
          </div>
        </div>
        <div className="time">
          <div className="content1">
            <span>2022 03-01</span>
          </div>
          <div className="notice">1</div>
        </div>
      </ChatListBox>
      <ChatListBox>
        <div className="wrap">
          <div className="tab1">
            <span className="subject">잘부탁드립니다.</span>
            <span className="number">2:2</span>
          </div>
          <div className="tab2">
            <span className="content">앗 그럼 그 장소에서 뵙겠습니다 같은 대학생끼리 만...</span>
          </div>
        </div>
        <div className="time">
          <div className="content1">
            <span>2022 03-01</span>
          </div>
          <div className="content2">
            <div className="notice">1</div>
          </div>
        </div>
      </ChatListBox>
    </Container>
  </>
);

export default ChatList;

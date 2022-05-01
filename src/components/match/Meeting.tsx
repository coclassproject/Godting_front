import React, { useState } from 'react';
import CustomModal from '../shared/modal';
import { MeetingBox, ReceiveBox, RequestContainer } from './style';

const Meeting = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <RequestContainer>
        <span className="infoText">보낸사람</span>
        <MeetingBox>
          <span className="title">내용을 입력해 주세요 내용을 입력해 주세요 내용</span>
          <div className="requestInfo">
            <div className="profile">
              <div onClick={() => setModalIsOpen(true)} />
              <div />
              <div />
              <span>3:3</span>
            </div>
            <div className="dateTime">
              <span>18:00</span>
              <span>d-1</span>
            </div>
          </div>
        </MeetingBox>
        <span className="infoText">매칭 현황</span>
        <ReceiveBox>
          <div className="padding">
            <div className="contents">
              <div className="profile">
                <div />
                <div />
                <div />
                <div />
                <span>4:4</span>
              </div>
              <span className="title">내용을 입력해 주세요 내용을 입력.</span>
              <div className="dateTime">
                <span className="gray">장소</span>
                <span className="black">경기</span>
                <span className="gray">시간</span>
                <span className="black">15:00</span>
                <span className="gray">날짜</span>
                <span className="black">12월 22일</span>
              </div>
            </div>
            <div className="btnContainer">
              <button>수락</button>
              <button>거절</button>
            </div>
          </div>
        </ReceiveBox>
      </RequestContainer>
      <CustomModal requestOrAceept type="미팅" modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default Meeting;

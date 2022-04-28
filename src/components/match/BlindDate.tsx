import React from 'react';
import { BlindDateBox, BtnContainer, ExtendsBlindDateBox, RequestContainer } from './style';

const BlindDate = () => (
  <RequestContainer>
    <span className="infoText">보낸사람</span>
    <BlindDateBox>
      <div className="container">
        <div className="contents">
          <div className="img" />
          <div className="infoContainer">
            <span className="name">하연</span>
            <div>
              <span>18학번</span>
              <span>문화상품디자인연계학과</span>
            </div>
          </div>
        </div>
        <span className="time">18:00</span>
      </div>
    </BlindDateBox>
    <span className="infoText">매칭 현황</span>
    <ExtendsBlindDateBox>
      <div className="container">
        <div className="contents">
          <div className="img" />
          <div className="infoContainer">
            <span className="name">하연</span>
            <div>
              <span>18학번</span>
              <span>문화상품디자인연계학과</span>
            </div>
          </div>
        </div>
        <BtnContainer>
          <button>수락</button>
          <button>거절</button>
        </BtnContainer>
      </div>
    </ExtendsBlindDateBox>
  </RequestContainer>
);

export default BlindDate;

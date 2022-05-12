import React, { useState } from 'react';
import { MdTune } from 'react-icons/md';
import { RequestContainer } from '../match/style';
import MeetingFilter from './filter';
import { Container, ExtendsMeetingBox } from './style';

interface MeetingComponentProps {
  setNoMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MeetingComponent = ({ setNoMenu }) => {
  const [open, setOpen] = useState(false);

  const openFilter = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <div className="filterContainer">
          <span>서울</span>
          <MdTune size="1.2rem" onClick={openFilter} />
        </div>
        <RequestContainer>
          <span className="infoText">보낸사람</span>
          <ExtendsMeetingBox>
            <span className="title">재미있게 놀아요</span>
            <div className="requestInfo">
              <div className="profile">
                <div />
                <div />
                <div />
                <span>3:3</span>
              </div>
              <div className="dateTime">
                <span>18:00</span>
                <span>조회20</span>
              </div>
            </div>
          </ExtendsMeetingBox>
          <span className="infoText">조회순</span>
          <ExtendsMeetingBox>
            <span className="title">재미있게 놀아요</span>
            <div className="requestInfo">
              <div className="profile">
                <div />
                <div />
                <div />
                <span>3:3</span>
              </div>
              <div className="dateTime">
                <span>18:00</span>
                <span>조회20</span>
              </div>
            </div>
          </ExtendsMeetingBox>
        </RequestContainer>
      </Container>
      {open && <MeetingFilter setOpen={setOpen} setNoMenu={setNoMenu} />}
    </>
  );
};

export default MeetingComponent;

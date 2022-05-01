import styled from '@emotion/styled';
import React, { useState } from 'react';
import { MdTune } from 'react-icons/md';
import { MeetingBox, RequestContainer } from 'src/components/match/style';
import MeetingFilter from 'src/components/meeting/filter';
import Layout from 'src/components/shared/Layout';

const Container = styled.div`
  width: 100%;
  height: 100%;

  .filterContainer {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};

    & > svg {
      margin-left: 0.3rem;
      cursor: pointer;
    }
  }
`;

const ExtendsMeetingBox = styled(MeetingBox)`
  .requestInfo {
    .dateTime {
      font-size: 12px;

      span:nth-of-type(2) {
        margin-left: 1rem;
      }
    }
  }
`;

const Meeting = () => {
  const [open, setOpen] = useState(false);
  const [noMenu, setNoMenu] = useState(false);

  const openFilter = () => {
    setOpen(true);
  };

  return (
    <>
      <Layout back bgColor title="미팅" noMenu={noMenu}>
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
      </Layout>
    </>
  );
};

export default Meeting;

import styled from '@emotion/styled';
import React, { useState } from 'react';
import BlindDate from 'src/components/match/BlindDate';
import Meeting from 'src/components/match/Meeting';
import Layout from 'src/components/shared/Layout';

interface TabSpanProps {
  activeColor: boolean;
}

const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;

  .tab {
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.MATCH_TAB_BORDER_COLOR};
    margin-bottom: 2rem;
  }
`;

const TabSpan = styled.span<TabSpanProps>`
  width: 50%;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.TITLE_BLACK_COLOR};
  cursor: pointer;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.activeColor ? props.theme.PUBLIC_BLUE : props.theme.MATCH_TAB_BORDER_COLOR)};
  padding-bottom: 1rem;
`;

const Match = () => {
  const [tabType, setTabType] = useState('소개팅');

  const onClickBlindDate = () => setTabType('소개팅');
  const onClickMeeting = () => setTabType('미팅');

  return (
    <Layout bgColor back title="매칭">
      <Container>
        <div className="tab">
          <TabSpan activeColor={tabType === '소개팅'} onClick={onClickBlindDate}>
            소개팅
          </TabSpan>
          <TabSpan activeColor={tabType === '미팅'} onClick={onClickMeeting}>
            미팅
          </TabSpan>
        </div>
        {tabType === '소개팅' ? <BlindDate /> : <Meeting />}
      </Container>
    </Layout>
  );
};

export default Match;

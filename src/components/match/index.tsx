import React, { useState } from 'react';
import BlindDate from './BlindDate';
import Meeting from './Meeting';
import { Container, TabSpan } from './style';

const MatchComponent = () => {
  const [tabType, setTabType] = useState('소개팅');

  const onClickBlindDate = () => setTabType('소개팅');
  const onClickMeeting = () => setTabType('미팅');
  return (
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
  );
};

export default MatchComponent;

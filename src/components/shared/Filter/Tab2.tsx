import React, { useState } from 'react';
import styled from '@emotion/styled';
import { INTEREST } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag } from 'src/theme/CommonStyle';
import { ButtonContainer } from './style';

const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ExtendsCommonTag = styled(CommonTag)`
  margin-bottom: 0.5rem;
`;

const ExtendsButtonContainer = styled(ButtonContainer)`
  position: absolute;
  bottom: 105px;
  left: 50%;
  transform: translateX(-50%);
`;

const Tab2 = () => {
  const [activeInterest, setActiveInterest] = useState([]);

  const onClickInterest = (e) => {
    const value = e.target.innerText;
    if (activeInterest.indexOf(value) === -1) {
      setActiveInterest((prev) => [...prev, value]);
    } else {
      setActiveInterest((prev) => prev.filter((v) => v !== value));
    }
  };

  return (
    <Container>
      {INTEREST.map((item, index) => (
        <>
          <ExtendsCommonTag
            activeColor={activeInterest.indexOf(item) !== -1}
            onClick={onClickInterest}
            htmlFor={`interest-${index}`}
            key={item}
          >
            {item}
          </ExtendsCommonTag>
          <CheckBoxOrRadioNone type="checkbox" value={item} id={`interest-${index}`} />
        </>
      ))}
      <ExtendsButtonContainer>
        <button>등록하기</button>
      </ExtendsButtonContainer>
    </Container>
  );
};

export default Tab2;

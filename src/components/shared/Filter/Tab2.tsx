import React from 'react';
import styled from '@emotion/styled';
import { INTEREST } from 'src/schema';
import { ButtonContainer, CommonTag } from './style';

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

const Tab2 = () => (
  <Container>
    {INTEREST.map((item) => (
      <ExtendsCommonTag key={item}>{item}</ExtendsCommonTag>
    ))}
    <ExtendsButtonContainer>
      <button>등록하기</button>
    </ExtendsButtonContainer>
  </Container>
);

export default Tab2;

import React from 'react';
import styled from '@emotion/styled';
import { MdTune } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  span {
    display: inline-flex;
  }
`;

const CategoryContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: inline-flex;
`;

const IconContainer = styled.div`
  margin: -3px 8px 0px 10px;
`;

const Category = () => (
  <Container>
    <CategoryContainer>
      <span>서울</span>
      <IconContainer>
        <MdTune size="1.3rem" />
      </IconContainer>
    </CategoryContainer>
  </Container>
);

export default Category;

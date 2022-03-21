import React from 'react';
import styled from '@emotion/styled';
import { MdTune } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  height: 50px;
  float: right;
  span {
    float: left;
    margin: 0.25rem 0.7rem 0rem 1rem;
  }
`;

const CategoryContainer = styled.div`
  padding: 1.5rem;
  float: right;
  cursor: pointer;
`;

const Category = () => (
  <Container>
    <CategoryContainer>
      <span>서울</span>
      <MdTune size="1.3rem" />
    </CategoryContainer>
  </Container>
);

export default Category;

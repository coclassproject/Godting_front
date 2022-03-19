import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 54px;
  display: absolute;
`;

const CategoryBtn = styled.button`
  float: right;
`;

const Category = () => (
  <Container>
    <CategoryBtn>카테고리</CategoryBtn>
  </Container>
);

export default Category;

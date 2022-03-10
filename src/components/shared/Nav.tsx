import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  z-index: 20;
  top: 0px;
  position: sticky;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.08);
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  span {
    padding: 1.5rem;
  }
`;

const Nav = () => (
  <Container>
    <SubContainer>
      <span>로고</span>
      <span>새로고침</span>
    </SubContainer>
  </Container>
);

export default Nav;

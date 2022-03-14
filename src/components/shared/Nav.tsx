import React from 'react';
import styled from '@emotion/styled';
import { HiOutlineRefresh } from 'react-icons/hi';

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
  align-items: center;
  height: 50px;

  span {
    padding: 1.5rem;
  }
`;

const IconContainer = styled.div`
  padding: 1.5rem;
`;

const Nav = () => (
  <Container>
    <SubContainer>
      <span>로고</span>
      <IconContainer>
        <HiOutlineRefresh size="1.3rem" />
      </IconContainer>
    </SubContainer>
  </Container>
);

export default Nav;

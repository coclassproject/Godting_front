import React from 'react';
import styled from '@emotion/styled';
import { BiChevronLeft } from 'react-icons/bi';

const IconContainer = styled.div`
  padding: 0.5rem;
`;

const Nav = () => (
  <IconContainer>
    <BiChevronLeft size="2rem" color="#666666" />
  </IconContainer>
);

export default Nav;

import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './Nav';
import Menu from './Menu';

const Container = styled.div`
  background-color: #f2f4f6;
`;

const SubContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  padding-bottom: 5rem;
  position: relative;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow-y: auto;

  @media ${(props) => props.theme.TABLET} {
    margin-left: auto;
    margin-right: auto;
    max-width: 448px;
  }
`;

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <motion.div>
          <SubContainer>
            <Nav />
            {children}
            <Menu currentMenu />
          </SubContainer>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Layout;

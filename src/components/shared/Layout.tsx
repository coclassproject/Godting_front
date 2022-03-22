import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import { AnimatePresence, motion } from 'framer-motion';
import { menus } from 'schema';
import Nav from './Nav';
import Menu from './Menu';

const Container = styled.div`
  background-color: ${(props) => props.theme.LAYOUT_BACKGROUND_COLOR};
`;

const SubContainer = styled.div`
  background-color: ${(props) => props.theme.LAYOUT_WHITE_COLOR};
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


const Layout = ({ noAni = false, children = null }) => {
  const router = useRouter();

  const currentPage = Object.keys(menus).find((key) => menus[key].path === router.pathname);
  const isMenu = Object.keys(menus).includes(currentPage);

  const variants = {
    hidden: noAni ? {} : { opacity: 0, x: 100, y: 0 },
    enter: noAni ? {} : { opacity: 1, x: 0, y: 0 },
  };

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          initial={!isMenu && 'hidden'}
          animate={!isMenu && 'enter'}
          transition={{ type: 'linear' }}
        >
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

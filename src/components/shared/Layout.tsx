import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { menus } from 'schema';
import Menu from './Menu';
import Nav from './Nav';

interface IBgColor {
  bgColor: boolean;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.LAYOUT_BACKGROUND_COLOR};
`;

const SubContainer = styled.div`
  background-color: ${(props) => props.theme.LAYOUT_WHITE_COLOR};
  width: 100%;
  min-height: 100vh;
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

const ChildrenContainer = styled.div<IBgColor>`
  padding: 2rem 1.2rem;
  height: 100%;
  background-color: ${(props) => (props.bgColor ? props.theme.SUB_BACKGROUND_COLOR : props.theme.PUBLIC_WHITE)};
`;

const Layout = ({
  noAni = false,
  children = null,
  back = false,
  bgColor = false,
  noMenu = false,
  noNav = false,
  title = '',
  component = false,
}) => {
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
            {!noNav && <Nav back={back} title={title} component={component} />}
            <ChildrenContainer bgColor={bgColor}>{children}</ChildrenContainer>
            {!noMenu && <Menu currentMenu />}
          </SubContainer>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Layout;

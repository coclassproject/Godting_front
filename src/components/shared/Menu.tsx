import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { menus } from 'src/schema';

const Container = styled.div`
  width: 100%;
  z-index: 100;
  bottom: 0px;
  position: fixed;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.PUBLIC_WHITE};

  @media ${(props) => props.theme.TABLET} {
    max-width: 448px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0 1rem;
  height: 60px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 1rem 0;
    cursor: pointer;
    color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};

    span {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;

const IconContainer = styled.div`
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
`;

const Menu = ({ currentMenu }) => (
  <Container>
    <SubContainer>
      {Object.entries(menus).map(([k, menu]) => (
        <Link key={k} href={menus[k]?.path} replace>
          <a>
            <IconContainer>{k === currentMenu ? <menu.activeIcon /> : <menu.icon />}</IconContainer>
            <span>{menu.title}</span>
          </a>
        </Link>
      ))}
    </SubContainer>
  </Container>
);

export default Menu;

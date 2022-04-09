import React from 'react';
import styled from '@emotion/styled';
import { HiOutlineRefresh } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100%;
  z-index: 20;
  top: 0px;
  position: sticky;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  span,
  div {
    padding: 1.5rem;
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  padding: 1rem;
`;

const Nav = ({ back = false }) => {
  const router = useRouter();

  return (
    <Container>
      <SubContainer>
        {back ? (
          <div onClick={() => router.back()}>
            <IoIosArrowBack color="#9E9E9E" size="1.4rem" />
          </div>
        ) : (
          <span>로고</span>
        )}
        <IconContainer>
          <HiOutlineRefresh size="1.3rem" />
        </IconContainer>
      </SubContainer>
    </Container>
  );
};

export default Nav;

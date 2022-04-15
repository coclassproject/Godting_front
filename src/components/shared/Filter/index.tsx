import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { FilterInput } from '../type';

interface PageTitleColor {
  textColor: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 65%;
  position: absolute;
  bottom: 0;
  z-index: 990;
  border-radius: 10px 10px 0 0;
  border-top: 1px solid black;
  margin: 0 -1.2rem;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  overflow-y: auto;
`;

const SubContainer = styled.div`
  padding: 1.5rem;

  .nav {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
  }
`;

const PageTitle = styled.span<PageTitleColor>`
  margin-right: 1rem;
  padding-bottom: 0.7rem;
  cursor: pointer;
  color: ${(props) => (props.textColor ? props.theme.TITLE_BLACK_COLOR : props.theme.SUBTITLE_AND_CONTENT_COLOR)};
  border-bottom: ${(props) => (props.textColor ? `5px solid ${props.theme.SUBTITLE_AND_CONTENT_COLOR}` : null)};
`;

// eslint-disable-next-line no-empty-pattern
const Filter = React.forwardRef(({}, ref: React.MutableRefObject<any>) => {
  const { register, handleSubmit, control } = useForm<FilterInput>();
  const [page, setPage] = useState(1);

  const onClickPage = (pageId: number) => {
    setPage(pageId);
  };

  return (
    <Container ref={ref}>
      <SubContainer>
        <div className="nav">
          <PageTitle textColor={page === 1} onClick={() => onClickPage(1)}>
            기본 정보
          </PageTitle>
          <PageTitle textColor={page === 2} onClick={() => onClickPage(2)}>
            관심사
          </PageTitle>
          <PageTitle textColor={page === 3} onClick={() => onClickPage(3)}>
            학번,과
          </PageTitle>
        </div>
        {page === 1 && <Tab1 register={register} handleSubmit={handleSubmit} />}
        {page === 2 && <Tab2 register={register} handleSubmit={handleSubmit} />}
        {page === 3 && <Tab3 handleSubmit={handleSubmit} />}
      </SubContainer>
    </Container>
  );
});

export default Filter;

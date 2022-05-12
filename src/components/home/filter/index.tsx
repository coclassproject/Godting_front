import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, PageTitle, SubContainer } from 'src/components/shared/Filter/style';
import UndergradMajorTab from 'src/components/shared/Filter/UndergradMajorTab';
import { HomeFilterInput, FilterSetOpen } from 'src/components/shared/type';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

// eslint-disable-next-line no-empty-pattern
const Filter = React.forwardRef(({ setOpen, setNoMenu }: FilterSetOpen, ref: React.MutableRefObject<any>) => {
  const { register, handleSubmit } = useForm<HomeFilterInput>();
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
        {page === 1 && <Tab1 setNoMenu={setNoMenu} register={register} setOpen={setOpen} handleSubmit={handleSubmit} />}
        {page === 2 && <Tab2 setNoMenu={setNoMenu} register={register} setOpen={setOpen} handleSubmit={handleSubmit} />}
        {page === 3 && <UndergradMajorTab setNoMenu={setNoMenu} setOpen={setOpen} handleSubmit={handleSubmit} />}
      </SubContainer>
    </Container>
  );
});

export default Filter;

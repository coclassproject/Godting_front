import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, PageTitle, SubContainer } from 'src/components/shared/Filter/style';
import UndergradMajorTab from 'src/components/shared/Filter/UndergradMajorTab';
import { FilterSetOpen, MeetingFilterInput } from 'src/components/shared/type';
import MeetingTab1 from './Tab1';

const MeetingFilter = ({ setOpen, setNoMenu }: FilterSetOpen) => {
  const { register, handleSubmit, control } = useForm<MeetingFilterInput>();
  const [page, setPage] = useState(1);

  const onClickPage = (pageId: number) => {
    setPage(pageId);
  };

  return (
    <Container>
      <SubContainer>
        <div className="nav">
          <PageTitle textColor={page === 1} onClick={() => onClickPage(1)}>
            기본 정보
          </PageTitle>
          <PageTitle textColor={page === 2} onClick={() => onClickPage(2)}>
            학번,과
          </PageTitle>
        </div>
        {page === 1 && (
          <MeetingTab1 setNoMenu={setNoMenu} register={register} setOpen={setOpen} handleSubmit={handleSubmit} />
        )}
        {page === 2 && (
          <UndergradMajorTab setNoMenu={setNoMenu} register={register} setOpen={setOpen} handleSubmit={handleSubmit} />
        )}
      </SubContainer>
    </Container>
  );
};

export default MeetingFilter;

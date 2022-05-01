import styled from '@emotion/styled';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import CustomRange from 'src/components/shared/CustomRange';
import Major from 'src/components/shared/Major';
import { HomeFilterInput, HomeFilterProps, MeetingFilterInput, MeetingFilterProps } from 'src/components/shared/type';
import { RangeContainer } from 'src/theme/CommonStyle';
import { ButtonContainer } from './style';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const COLLEGE_NUMBER_OPTION = {
  step: 1,
  min: 15,
  max: 22,
};

const UndergradMajorTab = ({ handleSubmit, setOpen, setNoMenu }: HomeFilterProps | MeetingFilterProps) => {
  const [undergrad, setUndergrad] = useState([17, 20]);
  const [choiceMajor, setChoiceMajor] = useState<string[]>([null]);

  const onSubmit: SubmitHandler<HomeFilterInput | MeetingFilterInput> = (data) => {
    const values = { ...data, undergrad, major: choiceMajor };
    console.log(values);
    setOpen(false);
    setNoMenu(false);
  };

  return (
    <Container>
      <RangeContainer>
        <div className="labelContainer">
          <label>학번</label>
          <span>{`${undergrad[0]}학번~${undergrad[1]}학번`}</span>
        </div>
        <CustomRange value={undergrad} onChangeValue={setUndergrad} option={COLLEGE_NUMBER_OPTION} />
      </RangeContainer>
      <Major choiceMajor={choiceMajor} setChoiceMajor={setChoiceMajor} />
      <ButtonContainer>
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default UndergradMajorTab;

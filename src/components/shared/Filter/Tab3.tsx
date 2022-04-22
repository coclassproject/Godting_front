import styled from '@emotion/styled';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { RangeContainer } from 'src/theme/CommonStyle';
import CustomRange from '../CustomRange';
import Major from '../Major';
import { FilterInput, FilterProps } from '../type';
import { ButtonContainer } from './Tab1';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

const COLLEGE_NUMBER_OPTION = {
  step: 1,
  min: 15,
  max: 22,
};

const Tab3 = ({ handleSubmit, setOpen, setNoMenu }: FilterProps) => {
  const [undergrad, setUndergrad] = useState([17, 20]);

  const onSubmit: SubmitHandler<FilterInput> = (data) => {
    const values = { ...data, undergrad };
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
      <Major />
      <ButtonContainer>
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default Tab3;

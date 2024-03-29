import React, { useState } from 'react';
import styled from '@emotion/styled';
import { INTEREST } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer } from 'src/theme/CommonStyle';
import { SubmitHandler } from 'react-hook-form';
import { HomeFilterInput, HomeFilterProps } from 'src/components/shared/type';
import { ButtonContainer, ExtendsButtonContainer } from 'src/components/shared/Filter/style';

const Container = styled(LabelContainer)`
  padding: 2rem 0;
`;

const ExtendsCommonTag = styled(CommonTag)`
  margin-bottom: 0.5rem;
  width: auto;
`;

const Tab2 = ({ register, handleSubmit, setOpen, setNoMenu }: HomeFilterProps) => {
  const [activeInterest, setActiveInterest] = useState([]);

  const onClickInterest = (e) => {
    const value = e.target.innerText;
    if (activeInterest.indexOf(value) === -1) {
      setActiveInterest((prev) => [...prev, value]);
    } else {
      setActiveInterest((prev) => prev.filter((v) => v !== value));
    }
  };

  const onSubmit: SubmitHandler<HomeFilterInput> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="container">
        {INTEREST.map((item, index) => (
          <>
            <ExtendsCommonTag
              activeColor={activeInterest.indexOf(item) !== -1}
              onClick={onClickInterest}
              htmlFor={`interest-${index}`}
              key={item}
            >
              {item}
            </ExtendsCommonTag>
            <CheckBoxOrRadioNone {...register('interest')} type="checkbox" value={item} id={`interest-${index}`} />
          </>
        ))}
      </div>
      <ExtendsButtonContainer>
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </ExtendsButtonContainer>
    </Container>
  );
};

export default Tab2;

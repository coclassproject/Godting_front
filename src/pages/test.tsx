import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { INTEREST } from 'src/schema';

interface InterestColor {
  activeColor: boolean;
}

const Container = styled.form`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  input {
    display: none;
  }
`;

export const CommonTag = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
  font-family: MingLiU;
`;

const ExtendsCommonTag = styled(CommonTag)<InterestColor>`
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.activeColor ? props.theme.PUBLIC_BLUE : props.theme.BUTTON_BACKGROUND_COLOR)};
  color: ${(props) => (props.activeColor ? props.theme.PUBLIC_WHITE : props.theme.SUBTITLE_AND_CONTENT_COLOR)};
`;

const Test = () => {
  const { register, handleSubmit } = useForm();
  const [interestActive, setInterestActive] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onClickInterest = (i) => {
    const te = i.target.innerText;
    if (interestActive.indexOf(te) === -1) {
      setInterestActive((prev) => [...prev, te]);
    } else {
      setInterestActive((prev) => prev.filter((v) => v !== te));
    }
  };

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        {INTEREST.map((item, i) => (
          <>
            <ExtendsCommonTag
              activeColor={interestActive.indexOf(item) !== -1}
              htmlFor={`interest-${i}`}
              key={item}
              onClick={(sx) => onClickInterest(sx)}
            >
              {item}
            </ExtendsCommonTag>
            <input type="checkbox" {...register('interest')} value={item} id={`interest-${i}`} />
          </>
        ))}
        <button>제출</button>
      </Container>
    </>
  );
};

export default Test;

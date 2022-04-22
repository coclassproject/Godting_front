import styled from '@emotion/styled';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { REGION } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer, RangeContainer } from 'src/theme/CommonStyle';
import CustomRange from '../CustomRange';
import { FilterInput, FilterProps } from '../type';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  button {
    width: 270px;
    border: none;
    background-color: ${(props) => props.theme.PUBLIC_BLUE};
    color: ${(props) => props.theme.PUBLIC_WHITE};
    border-radius: 5px;
    height: 40px;
    font-size: 14px;
    cursor: pointer;
  }
`;

type activeRadioType = '유' | '무' | '상관없음' | '술찌' | '잘마심';

const AGE_OPTION = {
  step: 1,
  min: 20,
  max: 39,
};

const HEIGHT_OPTION = {
  step: 1,
  min: 140,
  max: 190,
};

const Tab1 = ({ register, handleSubmit, setOpen, setNoMenu }: FilterProps) => {
  const [ageValue, setAgeValue] = useState([25, 30]);
  const [heightValue, setHeightValue] = useState([160, 175]);
  const [activeArea, setActiveArea] = useState([]);
  const [activeDrink, setActiveDrink] = useState('');
  const [activeSmoke, setActiveSmoke] = useState('');
  const [activeMilitary, setActiveMilitary] = useState('');

  const onClickArea = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const value = target.innerText;
    if (activeArea.indexOf(value) === -1) {
      setActiveArea((prev) => [...prev, value]);
    } else {
      setActiveArea((prev) => prev.filter((v) => v !== value));
    }
  };

  const onClickDrink = (value: activeRadioType) => {
    setActiveDrink(value);
  };

  const onClickSmoke = (value: activeRadioType) => {
    setActiveSmoke(value);
  };

  const onClickMilitary = (value: activeRadioType) => {
    setActiveMilitary(value);
  };

  const onSubmit: SubmitHandler<FilterInput> = (data) => {
    const values = { ...data, age: ageValue, height: heightValue };
    console.log(values);
  };

  return (
    <Container>
      <LabelContainer>
        <label className="title">지역</label>
        {REGION.map((area, index) => (
          <>
            <CommonTag
              activeColor={activeArea.indexOf(area) !== -1}
              onClick={onClickArea}
              htmlFor={`area-${index}`}
              key={area}
            >
              {area}
            </CommonTag>
            <CheckBoxOrRadioNone {...register('area')} id={`area-${index}`} value={area} type="checkbox" />
          </>
        ))}
      </LabelContainer>
      <RangeContainer>
        <div className="labelContainer">
          <label>나이</label>
          <span>{`${ageValue[0]}세~${ageValue[1]}세`}</span>
        </div>
        <CustomRange value={ageValue} onChangeValue={setAgeValue} option={AGE_OPTION} />
      </RangeContainer>
      <RangeContainer>
        <div className="labelContainer">
          <label htmlFor="key">키</label>
          <span>{`${heightValue[0]}cm~${heightValue[1]}cm`}</span>
        </div>
        <CustomRange value={heightValue} onChangeValue={setHeightValue} option={HEIGHT_OPTION} />
      </RangeContainer>
      <LabelContainer className="common">
        <label className="title">주량</label>
        <CommonTag htmlFor="술찌" activeColor={activeDrink === '술찌'} onClick={() => onClickDrink('술찌')}>
          술찌
        </CommonTag>
        <CheckBoxOrRadioNone {...register('drink')} type="radio" value="술찌" id="술찌" name="drink" />
        <CommonTag htmlFor="잘마심" activeColor={activeDrink === '잘마심'} onClick={() => onClickDrink('잘마심')}>
          잘마심
        </CommonTag>
        <CheckBoxOrRadioNone {...register('drink')} type="radio" value="잘마심" id="잘마심" name="drink" />
        <CommonTag htmlFor="상관없음" activeColor={activeDrink === '상관없음'} onClick={() => onClickDrink('상관없음')}>
          상관없음
        </CommonTag>
        <CheckBoxOrRadioNone {...register('drink')} type="radio" value="상관없음" id="상관없음" name="drink" />
      </LabelContainer>
      <LabelContainer className="common">
        <label className="title">흡연</label>
        <CommonTag htmlFor="유" activeColor={activeSmoke === '유'} onClick={() => onClickSmoke('유')}>
          &#26377;
        </CommonTag>
        <CheckBoxOrRadioNone {...register('smoke')} type="radio" value="유" id="유" name="smoke" />
        <CommonTag htmlFor="무" activeColor={activeSmoke === '무'} onClick={() => onClickSmoke('무')} lang="zh-CN">
          無
        </CommonTag>
        <CheckBoxOrRadioNone {...register('smoke')} type="radio" value="무" id="무" name="smoke" />
        <CommonTag htmlFor="상관없음" activeColor={activeSmoke === '상관없음'} onClick={() => onClickSmoke('상관없음')}>
          상관없음
        </CommonTag>
        <CheckBoxOrRadioNone {...register('smoke')} type="radio" value="상관없음" id="상관없음" name="smoke" />
      </LabelContainer>
      <LabelContainer className="common">
        <label className="title">군필여부</label>
        <CommonTag
          htmlFor="만기전역"
          activeColor={activeMilitary === '유'}
          onClick={() => onClickMilitary('유')}
          lang="zh-CN"
        >
          有
        </CommonTag>
        <CheckBoxOrRadioNone {...register('military')} type="radio" value="유" id="만기전역" name="military" />
        <CommonTag
          htmlFor="미필"
          activeColor={activeMilitary === '무'}
          onClick={() => onClickMilitary('무')}
          lang="zh-CN"
        >
          無
        </CommonTag>
        <CheckBoxOrRadioNone {...register('military')} type="radio" value="무" id="미필" name="military" />
        <CommonTag
          htmlFor="군필상관없음"
          activeColor={activeMilitary === '상관없음'}
          onClick={() => onClickMilitary('상관없음')}
        >
          상관없음
        </CommonTag>
        <CheckBoxOrRadioNone
          {...register('military')}
          type="radio"
          value="상관없음"
          id="군필상관없음"
          name="military"
        />
      </LabelContainer>
      <ButtonContainer>
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default Tab1;

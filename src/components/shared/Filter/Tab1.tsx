import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Range } from 'react-range';
import { REGION } from 'src/schema';
import { ButtonContainer, CommonTag, Label, LabelContainer, StyledRangeLine, StyledRangePointer } from './style';

const Container = styled.div`
  .region {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }

  .age {
    margin-bottom: 2rem;
  }

  .key {
    margin-bottom: 1.5rem;
  }

  .common {
    margin-bottom: 2rem;
  }
`;

const Tab1 = () => {
  const [ageValue, setAgeValue] = useState([25, 30]);
  const [heightValue, setHeightValue] = useState([160, 175]);

  return (
    <Container>
      <div className="region">
        <Label>지역</Label>
        {REGION.map((area) => (
          <CommonTag key={area}>{area}</CommonTag>
        ))}
      </div>
      <div className="age">
        <LabelContainer>
          <Label htmlFor="age">나이</Label>
          <span>{`${ageValue[0]}세~${ageValue[1]}세`}</span>
        </LabelContainer>
        <Range
          draggableTrack
          step={1}
          min={20}
          max={39}
          values={ageValue}
          onChange={(values) => setAgeValue(values)}
          renderTrack={({ props, children }) => <StyledRangeLine {...props}>{children}</StyledRangeLine>}
          renderThumb={({ props }) => <StyledRangePointer {...props} />}
        />
      </div>
      <div className="key">
        <LabelContainer>
          <Label htmlFor="key">키</Label>
          <span>{`${heightValue[0]}cm~${heightValue[1]}cm`}</span>
        </LabelContainer>
        <Range
          draggableTrack
          step={5}
          min={140}
          max={190}
          values={heightValue}
          onChange={(values) => setHeightValue(values)}
          renderTrack={({ props, children }) => <StyledRangeLine {...props}>{children}</StyledRangeLine>}
          renderThumb={({ props }) => <StyledRangePointer {...props} />}
        />
      </div>
      <div className="common">
        <Label>주량</Label>
        <CommonTag>술찌</CommonTag>
        <CommonTag>잘마심</CommonTag>
        <CommonTag>상관없음</CommonTag>
      </div>
      <div className="common">
        <Label>흡연</Label>
        <CommonTag>&#26377;</CommonTag>
        <CommonTag lang="zh-CN">無</CommonTag>
        <CommonTag>상관없음</CommonTag>
      </div>
      <div className="common">
        <Label>군필여부</Label>
        <CommonTag lang="zh-CN">有</CommonTag>
        <CommonTag lang="zh-CN">無</CommonTag>
        <CommonTag>상관없음</CommonTag>
      </div>
      <ButtonContainer>
        <button>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default Tab1;

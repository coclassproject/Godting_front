import React, { useState } from 'react';
import styled from '@emotion/styled';
import { region } from 'src/schema';
import { getTrackBackground, Range } from 'react-range';
import { ButtonContainer, CommonTag } from './style';

const Container = styled.div`
  .region {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }

  .age {
    margin-bottom: 2rem;
    input {
      width: 100%;
      appearance: none;
      background-color: ${(props) => props.theme.PUBLIC_BLUE};
    }
  }

  .key {
    margin-bottom: 1.5rem;
  }

  .common {
    margin-bottom: 2rem;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.PUBLIC_BLUE};
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;

const StyledRangeLine = styled.div`
  height: 6px;
  width: 100%;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
`;

const StyledRangePointer = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 30px;
  /* background-color: #999; */
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
`;

const Tab1 = () => {
  const [ageValue, setAgeValue] = useState([25, 30]);
  const [heightValue, setHeightValue] = useState([160, 175]);

  return (
    <Container>
      <div className="region">
        <Label>지역</Label>
        {region.map((area) => (
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

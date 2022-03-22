import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { REGION } from 'src/schema';
import { ButtonContainer, CommonTag, Label, LabelContainer, StyledRangeLine, StyledRangePointer } from './style';

const Container = styled.div`
  padding-bottom: 4rem;
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
  const AGE_STEP = 1;
  const AGE_MIN = 20;
  const AGE_MAX = 39;
  const HEIGHT_STEP = 5;
  const HEIGHT_MIN = 140;
  const HEIGHT_MAX = 190;
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
          values={ageValue}
          step={AGE_STEP}
          min={AGE_MIN}
          max={AGE_MAX}
          onChange={(values) => setAgeValue(values)}
          renderTrack={({ props, children }) => (
            <StyledRangeLine
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '2px',
                  background: getTrackBackground({
                    values: ageValue,
                    colors: ['#f5f5f5', '#3D00FC', '#f5f5f5'],
                    min: AGE_MIN,
                    max: AGE_MAX,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </StyledRangeLine>
          )}
          renderThumb={({ props }) => (
            <StyledRangePointer
              {...props}
              style={{
                ...props.style,
              }}
            >
              <div />
            </StyledRangePointer>
          )}
        />
      </div>
      <div className="key">
        <LabelContainer>
          <Label htmlFor="key">키</Label>
          <span>{`${heightValue[0]}cm~${heightValue[1]}cm`}</span>
        </LabelContainer>
        <Range
          values={heightValue}
          step={HEIGHT_STEP}
          min={HEIGHT_MIN}
          max={HEIGHT_MAX}
          onChange={(values) => setHeightValue(values)}
          renderTrack={({ props, children }) => (
            <StyledRangeLine
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '2px',
                  background: getTrackBackground({
                    values: heightValue,
                    colors: ['#f5f5f5', '#3D00FC', '#f5f5f5'],
                    min: HEIGHT_MIN,
                    max: HEIGHT_MAX,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </StyledRangeLine>
          )}
          renderThumb={({ props }) => (
            <StyledRangePointer
              {...props}
              style={{
                ...props.style,
              }}
            >
              <div />
            </StyledRangePointer>
          )}
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

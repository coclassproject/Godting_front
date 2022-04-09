import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { REGION } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer } from 'src/theme/CommonStyle';
import { ButtonContainer, Label, StyledRangeLine, RangeContainer, StyledRangePointer } from './style';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  /* .region {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  } */

  .age {
    margin-bottom: 2rem;
  }

  .key {
    margin-bottom: 1.5rem;
  }

  /* .common {
    margin-bottom: 2rem;
  } */
`;

type activeRadioType = '유' | '무' | '상관없음' | '술찌' | '잘마심';

const AGE_STEP = 1;
const AGE_MIN = 20;
const AGE_MAX = 39;
const HEIGHT_STEP = 5;
const HEIGHT_MIN = 140;
const HEIGHT_MAX = 190;

const Tab1 = () => {
  const [ageValue, setAgeValue] = useState([25, 30]);
  const [heightValue, setHeightValue] = useState([160, 175]);
  const [activeArea, setActiveArea] = useState([]);
  const [activeDrink, setActiveDrink] = useState('');
  const [activeSmoke, setActiveSmoke] = useState('');
  const [activeMilitary, setActiveMilitary] = useState('');

  const onClickArea = (e) => {
    const value = e.target.innerText;
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

  return (
    <Container>
      <LabelContainer className="region">
        <label>지역</label>
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
            <CheckBoxOrRadioNone id={`area-${index}`} value={area} type="checkbox" />
          </>
        ))}
      </LabelContainer>
      <div className="age">
        <RangeContainer>
          <Label htmlFor="age">나이</Label>
          <span>{`${ageValue[0]}세~${ageValue[1]}세`}</span>
        </RangeContainer>
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
        <RangeContainer>
          <Label htmlFor="key">키</Label>
          <span>{`${heightValue[0]}cm~${heightValue[1]}cm`}</span>
        </RangeContainer>
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
      <LabelContainer className="common">
        <Label>주량</Label>
        <CommonTag htmlFor="술찌" activeColor={activeDrink === '술찌'} onClick={() => onClickDrink('술찌')}>
          술찌
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="술찌" id="술찌" name="주량" />
        <CommonTag activeColor={activeDrink === '잘마심'} onClick={() => onClickDrink('잘마심')}>
          잘마심
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="잘마심" id="잘마심" name="주량" />
        <CommonTag activeColor={activeDrink === '상관없음'} onClick={() => onClickDrink('상관없음')}>
          상관없음
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="상관없음" id="상관없음" name="주량" />
      </LabelContainer>
      <LabelContainer className="common">
        <Label>흡연</Label>
        <CommonTag activeColor={activeSmoke === '유'} onClick={() => onClickSmoke('유')}>
          &#26377;
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="유" id="유" name="흡연" />
        <CommonTag activeColor={activeSmoke === '무'} onClick={() => onClickSmoke('무')} lang="zh-CN">
          無
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="무" id="무" name="흡연" />
        <CommonTag activeColor={activeSmoke === '상관없음'} onClick={() => onClickSmoke('상관없음')}>
          상관없음
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="상관없음" id="상관없음" name="흡연" />
      </LabelContainer>
      <LabelContainer className="common">
        <Label>군필여부</Label>
        <CommonTag activeColor={activeMilitary === '유'} onClick={() => onClickMilitary('유')} lang="zh-CN">
          有
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="유" id="유" name="군필" />
        <CommonTag activeColor={activeMilitary === '무'} onClick={() => onClickMilitary('무')} lang="zh-CN">
          無
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="무" id="무" name="군필" />
        <CommonTag activeColor={activeMilitary === '상관없음'} onClick={() => onClickMilitary('상관없음')}>
          상관없음
        </CommonTag>
        <CheckBoxOrRadioNone type="radio" value="상관없음" id="상관없음" name="군필" />
      </LabelContainer>
      <ButtonContainer>
        <button>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default Tab1;

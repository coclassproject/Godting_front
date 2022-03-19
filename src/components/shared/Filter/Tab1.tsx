import React from 'react';
import styled from '@emotion/styled';
import { region } from 'src/schema';
import { Range } from 'react-range';
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

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;

const Tab1 = () => {
  const [value, setValue] = React.useState([25, 50]);

  return (
    <Container>
      <div className="region">
        <Label>지역</Label>
        {region.map((area) => (
          <CommonTag key={area}>{area}</CommonTag>
        ))}
      </div>
      <div className="age">
        <Label htmlFor="age">나이</Label>
        {/* <input id="age" type="range" min="20" max="39" step="1" /> */}
      </div>
      <div className="key">
        <Label htmlFor="key">키</Label>
        <input id="key" type="range" min="140" max="190" step="10" />
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

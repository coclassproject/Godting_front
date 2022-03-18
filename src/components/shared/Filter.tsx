import React from 'react';
import styled from '@emotion/styled';
import { region } from 'src/schema';

const Container = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0px;
  z-index: 999;
  border-radius: 10px 10px 0 0;
  border-top: 1px solid black;
`;

const CommonTag = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
  font-family: MingLiU;
`;

const SubContainer = styled.div`
  padding: 1.5rem;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  }

  .nav {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};

    span {
      margin-right: 1rem;
      padding-bottom: 0.7rem;
    }

    span:nth-child(1) {
      border-bottom: 5px solid ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
  }

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

  .common {
    margin-bottom: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    width: 270px;
    border: none;
    background-color: ${(props) => props.theme.PUBLIC_BLUE};
    color: ${(props) => props.theme.PUBLIC_WHITE};
    border-radius: 5px;
    height: 40px;
  }
`;

const Filter = () => (
  <Container>
    <SubContainer>
      <div className="nav">
        <span>기본 정보</span>
        <span>관심사</span>
        <span>학번,과</span>
      </div>
      <div className="region">
        <label>지역</label>
        {region.map((area) => (
          <CommonTag key={area}>{area}</CommonTag>
        ))}
      </div>
      <div className="age">
        <label htmlFor="age">나이</label>
        <input id="age" type="range" min="20" max="39" step="1" />
      </div>
      <div className="key">
        <label htmlFor="key">키</label>
        <input id="key" type="range" min="140" max="190" step="10" />
      </div>
      <div className="common">
        <label>주량</label>
        <CommonTag>술찌</CommonTag>
        <CommonTag>잘마심</CommonTag>
        <CommonTag>상관없음</CommonTag>
      </div>
      <div className="common">
        <label>흡연</label>
        <CommonTag>&#26377;</CommonTag>
        <CommonTag lang="zh-CN">無</CommonTag>
        <CommonTag>상관없음</CommonTag>
      </div>
      <div className="common">
        <label>군필여부</label>
        <CommonTag lang="zh-CN">有</CommonTag>
        <CommonTag lang="zh-CN">無</CommonTag>
        <CommonTag>상관없음</CommonTag>
      </div>
      <ButtonContainer>
        <button>등록하기</button>
      </ButtonContainer>
    </SubContainer>
  </Container>
);

export default Filter;

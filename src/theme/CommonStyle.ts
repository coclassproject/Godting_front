import styled from '@emotion/styled';
import { ActiveCheckBoxOrRadioColor } from 'src/components/shared/type';

export const CommonTag = styled.label<ActiveCheckBoxOrRadioColor>`
  // 라디오 및 체크 박스에서 뷰로 표현할 라벨 스타일
  font-size: 14px;
  color: ${(props) => (props.activeColor ? props.theme.PUBLIC_WHITE : props.theme.SUBTITLE_AND_CONTENT_COLOR)};
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.activeColor ? props.theme.PUBLIC_BLUE : props.theme.BUTTON_BACKGROUND_COLOR)};
  font-family: MingLiU;
`;

export const CheckBoxOrRadioNone = styled.input`
  /* 리액트 훅 폼을 사용하기 위한 엘리먼트 */
  display: none;
`;

export const LabelContainer = styled.div`
  margin-bottom: 2rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    margin-bottom: 1.2rem;
  }

  label:nth-child(1) {
    display: block;
    font-size: 14px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  }
`;

export const FullButton = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  color: ${(props) => props.theme.PUBLIC_WHITE};
  height: 50px;
  border: none;
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

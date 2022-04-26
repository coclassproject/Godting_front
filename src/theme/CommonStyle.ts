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
  text-align: center;
  width: 25px;
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
    display: block;
  }

  .title {
    display: block;
    font-size: 14px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  }

  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const FullButton = styled.button`
  /* 너비를 100%로 갖는 버튼 */
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

export const RangeContainer = styled.div`
  /* range 스타일 컨테이너 */
  margin-bottom: 2rem;

  .labelContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      font-size: 14px;
      margin-bottom: 1.2rem;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }

    span {
      font-size: 14px;
      margin-bottom: 1.2rem;
      color: ${(props) => props.theme.PUBLIC_BLUE};
    }
  }
`;

export const StyledRangeLine = styled.div`
  /* 커스텀 range 컴포넌트 */
  height: 6px;
  width: 100%;
`;

export const StyledRangePointer = styled.div`
  /* 커스텀 range 컴포넌트 */
  width: 10px;
  height: 10px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

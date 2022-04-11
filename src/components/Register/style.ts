import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';

interface InterestColor {
  activeColor: boolean;
}

export const SignUpDiv = styled.div`
  margin-top: 50px;
  background-color: white;
  width: 100%;
  height: 100vh;
  .email {
    margin-top: 30px;
    margin-bottom: 50px;
    div {
      display: flex;
      flex-wrap: wrap;
    }
    .validation {
      display: flex;
      flex-direction: column;
    }
  }
  .nick {
    margin-bottom: 50px;
  }
`;

export const SignUpLabel = styled.label`
  font-size: 20px;
`;
export const Input = styled.input`
  width: 275px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  margin-top: 5px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;

export const Subject = styled.label`
  font-size: 16px;
  display: flex;
  margin-bottom: 20px;
`;
export const LabelSmall = styled.label`
  font-size: 14px;
  display: flex;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;
export const ValidationLabel = styled.label`
  font-size: 14px;
  color: #ff0a0a;
  margin-top: 7px;
`;

export const EmailBtn = styled.button`
  width: 100px;
  height: 40px;
  float: right;
  border-radius: 6px;
  background-color: #1c00ff;
  color: white;
  border-style: none;
  cursor: pointer;
  margin-left: 10px;
`;
export const ImageBtn = styled.button`
  width: 130px;
  height: 140px;
  border: none;
  border-radius: 10%;
`;

export const RegisterBtn = styled.button`
  cursor: pointer;
  width: 380px;
  height: 50px;
  color: white;
  border-style: none;
  border-radius: 6px;
  background-color: #1c00ff;
  font-size: 19px;
  margin-bottom: 100px;
`;

export const SelectBox = styled.select`
  width: 140px;
  height: 45px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 50px;
  margin-top: 10px;
  color: ${lightTheme.SUBTITLE_AND_CONTENT_COLOR};
`;

export const SelectDiv = styled.div`
  width: 100%;
  display: flex;
  div {
    margin-bottom: 50px;
  }
`;

interface InterestColor {
  activeColor: boolean;
}

export const Container = styled.form`
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

export const ExtendsCommonTag = styled(CommonTag)<InterestColor>`
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.activeColor ? props.theme.PUBLIC_BLUE : props.theme.BUTTON_BACKGROUND_COLOR)};
  color: ${(props) => (props.activeColor ? props.theme.PUBLIC_WHITE : props.theme.SUBTITLE_AND_CONTENT_COLOR)};
`;

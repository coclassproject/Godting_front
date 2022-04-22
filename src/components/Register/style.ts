import styled from '@emotion/styled';
import { CommonTag, FullButton } from 'src/theme/CommonStyle';

interface InterestColor {
  activeColor: boolean;
}

export const Background = styled.div`
  width: 100%;
`;
export const SignUpDiv = styled(Background)`
  background-color: white;
  width: 100%;
  .subject {
    font-size: 20px;
  }
  .email {
    margin-top: 30px;
    margin-bottom: 50px;
    .validation {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }
  }
  .nick {
    margin-bottom: 3rem;
  }
  .gender {
    margin-bottom: 3rem;
  }
  .height {
    margin-bottom: 3rem;
  }
  .class {
    margin-bottom: 3rem;
  }
  form {
    .img {
      margin-bottom: 2rem;
      input {
        display: none;
      }
    }
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  margin-top: 5px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;
export const IntroInput = styled(Input)`
  width: 90%;
`;
export const Subject = styled.label`
  font-size: 16px;
  display: flex;
  margin-bottom: 20px;
`;
export const LittleSubject = styled.label`
  font-size: 14px;
  display: flex;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;
export const ValidationLabel = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.VALIDATION_COLOR};
  margin-top: 7px;
`;

export const EmailBtn = styled.button`
  display: inline-block;
  width: 25%;
  height: 40px;
  border-radius: 6px;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  color: ${(props) => props.theme.PUBLIC_WHITE};
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

export const RegisterBtn = styled(FullButton)`
  margin-bottom: 150px;
  margin-top: 5rem;
`;

export const SelectBox = styled.select`
  width: 140px;
  height: 45px;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 50px;
  margin-top: 10px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;

export const SelectDiv = styled.div`
  width: 100%;
  display: flex;
  div {
    margin-bottom: 0.5rem;
  }
  .drink {
    margin-left: 3rem;
  }
`;

export const Container = styled.form`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  input {
    display: none;
  }
`;

export const ExtendsCommonTag = styled(CommonTag)<InterestColor>`
  margin-bottom: 0.5rem;
  background-color: ${(props) => (props.activeColor ? props.theme.PUBLIC_BLUE : props.theme.BUTTON_BACKGROUND_COLOR)};
  color: ${(props) => (props.activeColor ? props.theme.PUBLIC_WHITE : props.theme.SUBTITLE_AND_CONTENT_COLOR)};
`;

export const Img = styled.img`
  width: 130px;
  height: 140px;
  border: none;
  border-radius: 10%;
`;

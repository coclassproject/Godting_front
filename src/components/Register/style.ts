import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';

export const SignUpDiv = styled.div`
  margin-top: 50px;
  background-color: white;
  margin-right: 25px;
  margin-left: 25px;
  width: 100%;
  height: 150vh;
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
export const EmailDiv = styled.div`
  display: flex;
  width: 510px;
`;

export const RegisterBtn = styled.button`
  cursor: pointer;
  width: 378px;
  height: 51px;
  color: white;
  border-style: none;
  border-radius: 6px;
  background-color: #1c00ff;
  font-size: 19px;
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

export const MarginDiv = styled.div`
  margin-bottom: 30px;
`;

export const CategoryContainer = styled.div`
  display: flex;
`;

export const Category = styled.div`
  margin-bottom: 70px;
`;

import styled from '@emotion/styled';
import { CommonTag } from '../shared/Filter/style';

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ExtendsCommonTag = styled(CommonTag)`
  margin-bottom: 0.5rem;
`;

export const Background = styled.div`
  height: 100vh;
`;
export const SignUpDiv = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  width: 100%;
  height: 150vh;
  background-color: white;
  margin-right: 25px;
  margin-left: 25px;
`;

export const Div = styled.div`
  flex-direction: column;
  text-align: left;
  width: 100%;
  height: 150vh;
`;
export const SignUpLabel = styled.label`
  font-size: 23px;
`;
export const Input = styled.input`
  width: 275px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  margin-top: 5px;
`;

export const Subject = styled.label`
  font-size: 16px;
  display: flex;
  margin-bottom: 25px;
`;
export const LabelSmall = styled.label`
  font-size: 14px;
  display: flex;
`;
export const ValidationLabel = styled.label`
  font-size: 14px;
  float: left;
  color: #ff0a0a;
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
`;

export const SelectDiv = styled.div`
  width: 100%;
  display: flex;
`;
export const SelectSubDiv = styled.div`
  margin-bottom: 50px;
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

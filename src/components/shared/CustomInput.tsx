import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

const Input = styled.button`
  width: 100%;
  border: 1px solid ${(props) => props.theme.LINE_WHITE_COLOR};
  border-radius: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  text-align: left;
  height: 40px;
  padding-left: 0.8rem;
`;

interface CustomInputProps {
  value?: Date;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomInput = forwardRef(({ value, onClick }: CustomInputProps, ref: React.Ref<HTMLInputElement>) => (
  <Input ref={ref} onClick={onClick}>
    {value}
  </Input>
));

export default CustomInput;

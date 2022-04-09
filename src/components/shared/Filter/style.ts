import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  button {
    width: 270px;
    border: none;
    background-color: ${(props) => props.theme.PUBLIC_BLUE};
    color: ${(props) => props.theme.PUBLIC_WHITE};
    border-radius: 5px;
    height: 40px;
    font-size: 14px;
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.PUBLIC_BLUE};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
`;

export const StyledRangeLine = styled.div`
  height: 6px;
  width: 100%;
`;

export const StyledRangePointer = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

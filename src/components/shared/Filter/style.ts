import styled from '@emotion/styled';

export const CommonTag = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
  font-family: MingLiU;
`;

export const ButtonContainer = styled.div`
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
    font-size: 14px;
  }
`;

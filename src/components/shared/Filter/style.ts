import styled from '@emotion/styled';

export interface PageTitleColor {
  textColor: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 65%;
  position: absolute;
  bottom: 0;
  z-index: 990;
  border-radius: 15px 15px 0 0;
  margin: 0 -1.2rem;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  overflow-y: auto;
`;

export const SubContainer = styled.div`
  padding: 1.5rem;

  .nav {
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
  }
`;

export const PageTitle = styled.span<PageTitleColor>`
  margin-right: 1rem;
  padding-bottom: 0.7rem;
  cursor: pointer;
  color: ${(props) => (props.textColor ? props.theme.TITLE_BLACK_COLOR : props.theme.SUBTITLE_AND_CONTENT_COLOR)};
  border-bottom: ${(props) => (props.textColor ? `5px solid ${props.theme.SUBTITLE_AND_CONTENT_COLOR}` : null)};
`;

export const Tab1Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
`;

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
    cursor: pointer;
  }
`;

export const ExtendsButtonContainer = styled(ButtonContainer)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

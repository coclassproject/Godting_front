import styled from '@emotion/styled';

export const RequestContainer = styled.div`
  .infoText {
    font-size: 1rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  padding: 1rem;

  .title {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
  }

  .requestInfo {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 0.5rem;

    .dateTime {
      font-size: 14px;
      color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};

      span {
        margin-left: 0.5rem;
      }
    }
  }

  .profile {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    div {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background-color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    }

    div:nth-of-type(2) {
      transform: translateX(-25%);
      background-color: ${(props) => props.theme.PUBLIC_BLUE};
    }

    div:nth-of-type(3) {
      transform: translateX(-45%);
      background-color: ${(props) => props.theme.VALIDATION_COLOR};
    }

    div:nth-of-type(4) {
      transform: translateX(-65%);
    }

    span {
      font-size: 12px;
      color: ${(props) => props.theme.PUBLIC_BLUE};
      font-weight: bold;
    }
  }
`;

export const ReceiveBox = styled(Box)`
  height: 120px;

  .padding {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .contents {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .dateTime {
        span:nth-of-type(2n-1) {
          font-size: 12px;
          color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
          margin-right: 0.3rem;
        }

        span:nth-of-type(2n) {
          font-size: 12px;
          color: ${(props) => props.theme.TITLE_BLACK_COLOR};
          margin-right: 0.5rem;
        }
      }
    }

    .btnContainer {
      button {
        font-size: 14px;
        color: ${(props) => props.theme.PUBLIC_BLUE};
        border: 1px solid rgba(61, 0, 252, 0.2);
        border-radius: 5px;
        background-color: ${(props) => props.theme.PUBLIC_WHITE};
        padding: 0.3rem 0.8rem;
        margin-right: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;

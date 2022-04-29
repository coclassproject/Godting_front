import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
`;

export const ChatListBox = styled.div`
  width: 100%;
  height: 103px;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  .wrap {
    display: flex;
    flex-direction: column;
    margin: 25px 25px 25px 25px;
    .tab1 {
      display: inline-block;
    }
    .tab2 {
      margin-top: 10px;
    }
    .subject {
      margin-right: 3%;
      font-weight: bold;
      font-size: 14px;
      color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    }
    .number {
      font-weight: bold;
      font-size: 14px;
      line-height: 19px;
      color: ${(props) => props.theme.PUBLIC_BLUE};
    }
    .content {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
  }

  .time {
    width: 58px;
    height: 78px;
    margin: auto;
    margin-right: 12px;
    background-color: ${(props) => props.theme.LINE_WHITE_COLOR};
    border-radius: 5px;
    text-align: center;
    div {
      margin-top: 33%;
      span {
        display: block;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
      }
    }
  }
`;

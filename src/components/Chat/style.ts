import styled from '@emotion/styled';

/* 공통 */
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
  .day {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    font-size: 14px;
    margin-bottom: 30px;
  }
  .day::before,
  .day::after {
    content: '';
    flex-grow: 1;
    background: ${(props) => props.theme.LINE_GREY_COLOR};
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

/* chat List */
export const ChatListBox = styled.div`
  width: 100%;
  height: 103px;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 0 0.5rem;
  .wrap {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    .tab1 {
      display: inline-block;
    }
    .tab2 {
      margin-top: 10px;
    }
    .subject {
      display: inline-block;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px;
      margin-right: -60px;
      margin-bottom: -3px;
      font-weight: bold;
      font-size: 14px;
      color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    }
    .number {
      vertical-align: middle;
      line-height: 20px;
      font-weight: bold;
      font-size: 14px;
      color: ${(props) => props.theme.PUBLIC_BLUE};
    }
    .content {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 280px;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
  }

  .time {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    .content1 {
      span {
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
      }
    }
    .notice {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${(props) => props.theme.PUBLIC_BLUE};
      color: ${(props) => props.theme.PUBLIC_WHITE};
      font-size: 14px;
    }
  }
`;

/* chat Detail */

export const ChatSubject = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  .subject {
    margin: 0 auto;
    display: block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 178px;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.015em;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
  }
`;

export const OtherContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 3rem;
  .content {
    width: 85%;
    .chat {
      width: 100%;
    }
    .nick {
      padding-left: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
    .time {
      padding-left: 20px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const MeContainer = styled(OtherContainer)`
  justify-content: flex-end;
  .content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-end;
    align-items: flex-end;
    padding-right: 20px;
    .nick-right {
      padding-right: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
    .time-right {
      padding-right: 5px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
export const BubbleLeft = styled.div`
  position: relative;
  padding: 1rem;
  max-width: 70%;
  background: ${(props) => props.theme.PUBLIC_WHITE};
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  span {
    font-size: 14px;
    position: relative;
    z-index: 999;
  }
  &:after {
    border-top: 15px solid ${(props) => props.theme.PUBLIC_WHITE};
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 20px;
    left: -15px;
  }
`;

export const BubbleRight = styled(BubbleLeft)`
  max-width: 74%;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  color: ${(props) => props.theme.PUBLIC_WHITE};
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
  &:after {
    border-top: 15px solid ${(props) => props.theme.PUBLIC_BLUE};
    border-left: 0px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 0px solid transparent;
    right: -15px;
    left: 0;
  }
`;

export const Circle = styled.div`
  margin-top: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.PUBLIC_LIGHTGREY};
`;

export const ChatContainer = styled.div`
  max-width: 448px;
  width: 100%;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
`;

export const ChatDiv = styled.div`
  width: 100%;
  height: 45px;
  background: ${(props) => props.theme.PUBLIC_WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;

  .files {
    flex-grow: 1;
    color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    cursor: pointer;
    padding-left: 1rem;

    & > svg:nth-of-type(1) {
      margin-right: 0.5rem;
    }
  }
`;

export const ChatInput = styled.input`
  font-size: 14px;
  color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
  flex-grow: 10;
  border: none;
  padding-left: 1rem;

  &:focus {
    outline: none;
  }
`;

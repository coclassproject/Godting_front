import styled from '@emotion/styled';

/* 공통 */
export const Container = styled.div`
  width: 100%;
  height: 100%;
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
    width: 60px;
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
  padding-left: 1rem;
  margin-bottom: 3rem;
  .nick {
    margin-left: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  }
  .time {
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const MeContainer = styled(OtherContainer)`
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-end;
    align-items: flex-end;
    margin-right: 20px;
    .nick-right {
      margin-right: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
    .time-right {
      margin-right: 5px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  padding-right: 1rem;
  padding-left: 3rem;
`;
export const BubbleLeft = styled.div`
  position: relative;
  padding: 1rem;
  max-width: 50%;
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

export const ChatDiv = styled.div`
  width: 100%;
  height: 45px;
  background: ${(props) => props.theme.PUBLIC_WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  .files {
    width: 15%;
    justify-content: space-around;
    display: flex;
    flex-direction: row-reverse;
    color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
  }
`;
export const ChatInput = styled.input`
  margin-left: 20px;
  width: 75%;
  height: 90%;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
  border: none;
`;

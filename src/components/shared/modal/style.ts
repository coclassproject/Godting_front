import styled from '@emotion/styled';
import { FullButton } from 'src/theme/CommonStyle';

interface ModalImgProp {
  type: '소개팅' | '미팅';
}

export const ModalBtn = styled(FullButton)`
  margin-top: 20px;
  font-size: 14px;
`;

export const ModalCard = styled.div`
  width: 300px;
  height: 450px;
  display: absolute;
  text-align: center;
  vertical-align: middle;
  flex-direction: column;
  .exit {
    margin-left: 95%;
    cursor: pointer;
  }
  .all {
    text-align: center;
    display: flex;
    flex-direction: column;
    .nick {
      height: auto;
      font-weight: bold;
      font-size: 14px;
      color: ${(props) => props.theme.TITLE_BLACK_COLOR};
      text-align: center;
      vertical-align: middle;
      padding-top: 10px;
    }
    .lectureHeart {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .hidden {
      visibility: hidden;
    }
    .lecture {
      font-size: 14px;
      color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    }
    .heart {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.PUBLIC_LIGHTGREY};

      span {
        font-size: 14px;
        margin-left: 0.3rem;
      }
    }
  }
  .info {
    background: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
    border-radius: 5px;
    width: 310px;
    display: flex;
    flex-direction: column;
    margin: 20px -5px;
    .container {
      margin: 0 auto;
      border-bottom: 1px solid ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
      height: 33%;
      width: 80%;
      .infoDetail {
        text-align: left;
        padding: 1rem 0;
        span {
          line-height: 33%;
          vertical-align: middle;
        }
        .subject {
          display: inline-block;
          width: 25%;
          margin-right: 10px;
          font-size: 14px;
          color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
        }
        .detail {
          font-size: 14px;
          color: ${(props) => props.theme.TITLE_BLACK_COLOR};
        }
      }
    }

    .container:last-child {
      border: none;
    }
  }

  .meetingImg {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > svg {
      cursor: pointer;
    }
  }

  .btnContainer {
    display: flex;
    justify-content: space-between;

    button:nth-of-type(1) {
      width: 77%;
    }
    button:nth-of-type(2) {
      width: 20%;
      border: none;
      height: 50px;
      margin-top: 20px;
      background-color: ${(props) => props.theme.BUTTON_BACKGROUND_COLOR};
    }
  }
`;
export const ModalImg = styled.div<ModalImgProp>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.PUBLIC_LIGHTGREY};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  display: inline-block;
  margin-bottom: ${(props) => props.type === '미팅' && '1rem'};
`;
export const ModalComment = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    text-align: left;
  }
  .comment {
    margin-bottom: 10px;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  }
`;

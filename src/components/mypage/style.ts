import styled from '@emotion/styled';

export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    301.89deg,
    ${(props) => props.theme.PUBLIC_BLUE} 7.3%,
    ${(props) => props.theme.PUBLIC_PURPLE} 100%
  );
`;

export const LowBack = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 622px;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 18px;
`;

export const SwiperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 260px;
  height: 90px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
  border-radius: 10px;
  .img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.PUBLIC_LIGHTGREY};
  }
  .content {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .lecture {
      font-size: 14px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  height: 60%;
  width: 100%;
  bottom: 0;
  z-index: 990;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  overflow-y: auto;
  .favorite {
    padding-top: 40px;
    .swiper {
      padding-bottom: 10px;
      cursor: pointer;
    }
    .subject {
      padding-left: 1.5rem;
    }
  }
`;

export const SubContainer = styled.div`
  height: 40%;
  background: linear-gradient(
    301.89deg,
    ${(props) => props.theme.PUBLIC_BLUE} 7.3%,
    ${(props) => props.theme.PUBLIC_PURPLE} 100%
  );

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 20%;
    .content1 {
      display: flex;
      flex-direction: column;
      height: 30%;
      color: ${(props) => props.theme.PUBLIC_WHITE};
      .class {
        margin-bottom: 10px;
        font-size: 14px;
        display: flex;
        border: none;
        width: 70px;
        height: 30px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 14.5px;
        align-items: center;
        justify-content: space-around;
      }
      .nick {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
      }
      .lecture {
        margin-bottom: 10px;
        font-size: 16px;
      }
    }
    .content2 {
      div {
        border-radius: 50%;
      }
      .img {
        position: relative;
        width: 140px;
        height: 140px;
        background-color: ${(props) => props.theme.PUBLIC_LIGHTGREY};
      }
      .edit {
        position: absolute;
        z-index: 99;
        width: 36px;
        height: 36px;
        background-color: ${(props) => props.theme.PUBLIC_WHITE};
        left: 100px;
        top: 100px;
        cursor: pointer;
        .icons {
          position: relative;
          left: 6px;
          top: 6px;
          color: ${(props) => props.theme.PUBLIC_BLUE};
        }
      }
    }
  }
`;

export const ButtonDiv = styled.div`
  background-color: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
  border-radius: 10px;
  margin: 1rem;

  & > .bottomBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    & > span {
      color: ${(props) => props.theme.TITLE_BLACK_COLOR};
      font-weight: 500;
    }
  }

  & > hr {
    margin: 0 0.5rem;
    border: none;
    height: 1px;
    background-color: ${(props) => props.theme.MATCH_TAB_BORDER_COLOR};
  }

  .icon {
    color: ${(props) => props.theme.PUBLIC_LIGHTGREY};
  }
`;

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
    margin-top: 40px;
    margin-left: 20px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  width: 380px;
  height: 120px;
  background-color: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
  .logout {
    border: none;
  }
  .resign {
    border-top: 1px solid ${(props) => props.theme.MATCH_TAB_BORDER_COLOR};
    border-bottom: none;
    border-right: none;
    border-left: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    301.89deg,
    ${(props) => props.theme.PUBLIC_BLUE} 7.3%,
    ${(props) => props.theme.PUBLIC_PURPLE} 100%
  );
  .content1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px;
    width: 50%;
    height: 30%;
    color: ${(props) => props.theme.PUBLIC_WHITE};
    .class {
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
      font-size: 20px;
      font-weight: bold;
    }
    .lecture {
      font-size: 16px;
    }
  }
  .content2 {
    width: 50%;
    div {
      border-radius: 50%;
    }
    .img {
      position: relative;
      margin-left: 30px;
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
`;

import styled from '@emotion/styled';

export const Back = styled.div`
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
  width: 261px;
  height: 90px;
  background-color: ${(props) => props.theme.SUB_BACKGROUND_COLOR};
  border-radius: 10px;
`;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 60%;
  width: 100%;
  bottom: 0;
  z-index: 990;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  overflow-y: auto;
`;
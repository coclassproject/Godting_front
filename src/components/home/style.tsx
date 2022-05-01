import styled from '@emotion/styled';
import { FullButton } from 'src/theme/CommonStyle';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  span {
    display: inline-flex;
  }
`;

export const CategoryContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: inline-flex;
`;

export const IconContainer = styled.div`
  margin: -3px 8px 0px 10px;
`;

export const CardContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
  justify-content: center;
`;

export const CardSubContainer = styled.div`
  border-radius: 10px;
  width: 185px;
  height: 240px;
  float: left;
  margin: 6px;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 4.41%, rgba(3, 3, 3, 0.22) 100%);
  cursor: pointer;
`;
export const CardButton = styled.button`
  position: absolute;
  width: 34px;
  height: 34px;
  left: 140px;
  bottom: 200px;
  border-radius: 100%;
  color: ${(props) => props.theme.LINE_WHITE_COLOR};
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  border: 1px solid ${(props) => props.theme.LINE_WHITE_COLOR};
  cursor: pointer;
`;

export const CardOld = styled.span`
  position: absolute;
  right: 135px;
  top: 180px;
  color: ${(props) => props.theme.LAYOUT_WHITE_COLOR};
`;
export const CardHeight = styled.span`
  position: absolute;
  right: 120px;
  top: 200px;
  color: ${(props) => props.theme.LAYOUT_WHITE_COLOR};
`;

export const RegisterContainer = styled.div`
  width: 400px;
  height: 300px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

export const RegisterSubContainer = styled.div`
  width: 175px;
  height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const RegisterCard = styled.div`
  border-radius: 10px;
  width: 175px;
  height: 230px;
  box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin: 6px;
`;
export const RegisterImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.PUBLIC_LIGHTGREY};
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const RegisterNick = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  text-align: center;
  vertical-align: middle;
  padding-top: 10px;
`;
export const RegisterLecture = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  vertical-align: middle;
  text-align: center;
  padding: 10px 2px 3px 4px;
`;
export const RegisterInfo = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.PUBLIC_LIGHTGREY}
  vertical-align: middle;
  text-align: center;
  padding: 10px 2px 3px 4px;
`;
export const Span = styled.div`
  margin-left: 10px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

import styled from '@emotion/styled';
import { CommonTag, LabelContainer } from 'src/theme/CommonStyle';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const PublicContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem 1.2rem;

  h1 {
    color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    margin-bottom: 0.5rem;
  }
`;

export const QualificationContainer = styled(PublicContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  cursor: pointer;

  div {
    opacity: 0.2;
    margin-right: 0.3rem;
    padding-top: 0.1rem;
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    font-weight: 500;
  }
`;

export const MemberContainer = styled(PublicContainer)`
  .me {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    div {
      width: 110px;
      height: 110px;
      border-radius: 999px;
      border: 1px solid black;
    }
  }

  .friends {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    opacity: 0.1;
  }
`;

export const HistoryContainer = styled(PublicContainer)`
  height: 150px;

  & > textarea {
    width: 100%;
    height: 80%;
    resize: none;
    border: none;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
  color: ${(props) => props.theme.PUBLIC_WHITE};
  height: 50px;
  border: none;
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

export const FirstLabelContainer = styled(LabelContainer)`
  margin-bottom: 4rem;
`;

export const ExtendsLabelContainer = styled(LabelContainer)`
  .title {
    margin-bottom: 0.5rem;
  }
`;

export const ExtendsCommonTag = styled(CommonTag)`
  margin-bottom: 0.5rem;
`;

export const AgeTitle = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.TITLE_BLACK_COLOR};
  display: block;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

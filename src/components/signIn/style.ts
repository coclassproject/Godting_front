import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);

  .text {
    font-size: 1.2rem;
    color: ${(props) => props.theme.TITLE_BLACK_COLOR};
    line-height: 1.8rem;
    margin-bottom: 2rem;

    span:nth-of-type(2) {
      font-weight: bold;
    }
  }

  img {
    margin-bottom: 0.3rem;
    cursor: pointer;
  }
`;

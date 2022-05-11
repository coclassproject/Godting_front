import styled from '@emotion/styled';
import { MeetingBox } from '../match/style';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .filterContainer {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};

    & > svg {
      margin-left: 0.3rem;
      cursor: pointer;
    }
  }
`;

export const ExtendsMeetingBox = styled(MeetingBox)`
  .requestInfo {
    .dateTime {
      font-size: 12px;

      span:nth-of-type(2) {
        margin-left: 1rem;
      }
    }
  }
`;

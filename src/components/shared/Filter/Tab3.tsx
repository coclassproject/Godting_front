import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Range } from 'react-range';
import { IoIosArrowDown } from 'react-icons/io';
import { DEPARTMENT_LIST, MajorObj } from 'src/schema';
import { VscChromeClose } from 'react-icons/vsc';
import { Label, LabelContainer, StyledRangeLine, StyledRangePointer } from './style';

const Container = styled.div`
  padding: 2rem 0;
`;

const ExtendsLabel = styled(Label)`
  margin-bottom: 0.5rem;
`;

const DepartmentContainer = styled.div`
  margin-top: 2rem;

  .tag {
    .choiceMajor {
      display: inline-flex;
      align-items: center;
      margin-right: 1rem;

      span {
        font-size: 14px;
        margin-right: 0.1rem;
        color: ${(props) => props.theme.ICON_COLOR_AND_BOTTOM_CONTENT};
      }

      svg {
        cursor: pointer;
      }
    }
  }
`;

const ListContainer = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;

  .list {
    display: flex;
    align-items: center;
    cursor: pointer;

    div {
      margin-right: 0.2rem;
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
  }
`;

const SubListContainer = styled.div`
  padding-left: 2rem;

  span {
    cursor: pointer;
    font-size: 14px;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
  }
`;

const Hr = styled.hr`
  margin: 0.8rem 0;
  opacity: 0.2;
`;

const Tab3 = () => {
  const [undergrad, setUndergrad] = useState([15, 22]);
  const [major, setMajor] = useState<[number, string]>([null, '']);
  const [open, setOpen] = useState(false);
  const [choiceMajor, setChoiceMajor] = useState([null]);

  return (
    <Container>
      <LabelContainer>
        <Label>학번</Label>
        <span>{`${undergrad[0]}학번~${undergrad[1]}학번`}</span>
      </LabelContainer>
      <Range
        draggableTrack
        step={1}
        min={15}
        max={22}
        values={undergrad}
        onChange={(values) => setUndergrad(values)}
        renderTrack={({ props, children }) => <StyledRangeLine {...props}>{children}</StyledRangeLine>}
        renderThumb={({ props }) => <StyledRangePointer {...props} />}
      />
      <DepartmentContainer>
        <div className="tag">
          <ExtendsLabel>학과</ExtendsLabel>
          {choiceMajor[0] &&
            choiceMajor.map((choice) => (
              <div className="choiceMajor">
                <span>{`#${choice}`}</span>
                <VscChromeClose
                  onClick={() => setChoiceMajor((prev) => prev.filter((v) => v !== choice))}
                  color="#9E9E9E"
                />
              </div>
            ))}
        </div>
        <ListContainer>
          {DEPARTMENT_LIST.map((department, index) => (
            <>
              <div
                className="list"
                key={department[1]}
                onClick={() => {
                  setMajor([index, department[1]]);
                  setOpen((prev) => !prev);
                }}
              >
                <div>
                  <IoIosArrowDown color="#666666" />
                </div>
                <span key={department[1]}>{department[0]}</span>
              </div>
              <Hr />
              {open &&
                major[0] === index &&
                MajorObj[major[0]].map((v) => (
                  <SubListContainer key={v}>
                    <span
                      onClick={() => setChoiceMajor((prev) => (prev[0] === null ? [v] : [...prev, v]))}
                      key={v}
                    >{`- ${v}`}</span>
                    <Hr />
                  </SubListContainer>
                ))}
            </>
          ))}
        </ListContainer>
      </DepartmentContainer>
    </Container>
  );
};

export default Tab3;

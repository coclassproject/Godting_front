import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Range, getTrackBackground } from 'react-range';
import { IoIosArrowDown } from 'react-icons/io';
import { DEPARTMENT_LIST, MajorObj } from 'src/schema';
import { VscChromeClose } from 'react-icons/vsc';
import { ButtonContainer, Label, LabelContainer, StyledRangeLine, StyledRangePointer } from './style';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
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
  const STEP = 1;
  const MIN = 15;
  const MAX = 22;
  const [undergrad, setUndergrad] = useState([17, 20]);
  const [major, setMajor] = useState<[number, string]>([null, '']);
  const [open, setOpen] = useState(false);
  const [choiceMajor, setChoiceMajor] = useState<string[]>([null]);

  const removeChoiceMajor = (choice: string) => {
    setChoiceMajor((prev) => prev.filter((v) => v !== choice));
  };

  const onClickDepartment = (index: number, department: string) => {
    setMajor([index, department]);
    setOpen((prev) => !prev);
  };

  const onClickMajor = (selectMajor: string) => {
    setChoiceMajor((prev) => {
      if (prev[0] === null) {
        return [selectMajor];
      }
      if (prev.indexOf(selectMajor) !== -1) {
        return [...prev];
      }
      return [...prev, selectMajor];
    });
  };

  return (
    <Container>
      <LabelContainer>
        <Label>학번</Label>
        <span>{`${undergrad[0]}학번~${undergrad[1]}학번`}</span>
      </LabelContainer>
      <Range
        values={undergrad}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setUndergrad(values)}
        renderTrack={({ props, children }) => (
          <StyledRangeLine
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '2px',
                background: getTrackBackground({
                  values: undergrad,
                  colors: ['#f5f5f5', '#3D00FC', '#f5f5f5'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </StyledRangeLine>
        )}
        renderThumb={({ props }) => (
          <StyledRangePointer
            {...props}
            style={{
              ...props.style,
            }}
          >
            <div />
          </StyledRangePointer>
        )}
      />
      <DepartmentContainer>
        <div className="tag">
          <ExtendsLabel>학과</ExtendsLabel>
          {choiceMajor[0] &&
            choiceMajor.map((choice) => (
              <div className="choiceMajor">
                <span>{`#${choice}`}</span>
                <VscChromeClose onClick={() => removeChoiceMajor(choice)} color="#9E9E9E" />
              </div>
            ))}
        </div>
        <ListContainer>
          {DEPARTMENT_LIST.map((department, index) => (
            <>
              <div className="list" key={department[1]} onClick={() => onClickDepartment(index, department[1])}>
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
                    <span onClick={() => onClickMajor(v)} key={v}>{`- ${v}`}</span>
                    <Hr />
                  </SubListContainer>
                ))}
            </>
          ))}
        </ListContainer>
      </DepartmentContainer>
      <ButtonContainer>
        <button>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default Tab3;

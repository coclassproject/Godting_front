import styled from '@emotion/styled';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { IoIosArrowDown } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import { DEPARTMENT_LIST, MajorObj } from 'src/schema';
import { RangeContainer } from 'src/theme/CommonStyle';
import CustomRange from '../CustomRange';
import { FilterInput } from '../type';
import { ButtonContainer } from './Tab1';

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
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

  label {
    font-size: 14px;
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    margin-bottom: 0.5rem;
  }

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

const COLLEGE_NUMBER_OPTION = {
  step: 1,
  min: 15,
  max: 22,
};

const Tab3 = ({ handleSubmit }) => {
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

  const onSubmit: SubmitHandler<FilterInput> = (data) => {
    const values = { ...data, undergrad, major };
    console.log(values);
  };

  return (
    <Container>
      <RangeContainer>
        <div className="labelContainer">
          <label>학번</label>
          <span>{`${undergrad[0]}학번~${undergrad[1]}학번`}</span>
        </div>
        <CustomRange value={undergrad} onChangeValue={setUndergrad} option={COLLEGE_NUMBER_OPTION} />
      </RangeContainer>
      <DepartmentContainer>
        <div className="tag">
          <label>학과</label>
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
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </ButtonContainer>
    </Container>
  );
};

export default Tab3;

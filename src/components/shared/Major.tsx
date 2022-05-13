import styled from '@emotion/styled';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import { DEPARTMENT_LIST, MajorObj } from 'src/schema';

const DepartmentContainer = styled.div`
  margin-top: 2rem;

  .tag {
    label {
      display: block;
      padding-bottom: 0.5rem;
      font-size: 14px;
      color: ${(props) => props.theme.SUBTITLE_AND_CONTENT_COLOR};
    }
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

interface MajorProps {
  choiceMajor: string[];
  setChoiceMajor: React.Dispatch<React.SetStateAction<string[]>>;
}

const Major = ({ choiceMajor, setChoiceMajor }: MajorProps) => {
  const [major, setMajor] = useState<[number, string]>([null, '']);
  // const [choiceMajor, setChoiceMajor] = useState<string[]>([null]);
  const [dropDown, setDropDown] = useState(false);

  const removeChoiceMajor = (choice: string) => {
    setChoiceMajor((prev) => prev.filter((v) => v !== choice));
  };

  const onClickDepartment = (index: number, department: string) => {
    setMajor([index, department]);
    setDropDown((prev) => !prev);
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
            {dropDown &&
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
  );
};

export default Major;

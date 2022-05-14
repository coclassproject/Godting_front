import React, { useState } from 'react';
import { COLLEGE_NUMBER, PARTICIPANT, REGION } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, FullButton, LabelContainer, RangeContainer } from 'src/theme/CommonStyle';
import DatePicker from 'react-datepicker';
import Major from '../shared/Major';
import { AgeTitle, ExtendsCommonTag, ExtendsLabelContainer, FirstLabelContainer } from './style';
import CustomRange from '../shared/CustomRange';
import CustomInput from '../shared/CustomInput';

const AVGAGE_OPTION = {
  step: 1,
  min: 20,
  max: 30,
};

const QualificationComponent = () => {
  const [avgAge, setAvgAge] = useState([20, 27]);
  const [startDate, setStartDate] = useState(new Date());
  const [choiceMajor, setChoiceMajor] = useState<string[]>([null]);

  return (
    <>
      <FirstLabelContainer>
        <span>팀 인원</span>
        <div className="container">
          {PARTICIPANT.map((person, index) => (
            <>
              <CommonTag activeColor={false} htmlFor={`participant-${index}`} key={person}>
                {person}
              </CommonTag>
              <CheckBoxOrRadioNone type="radio" value={person} id={`participant-${index}`} />
            </>
          ))}
        </div>
      </FirstLabelContainer>
      <LabelContainer>
        <span>미팅 지역</span>
        <div className="container">
          {REGION.map((region, index) => (
            <>
              <CommonTag activeColor={false} htmlFor={`region-${index}`} key={region}>
                {region}
              </CommonTag>
              <CheckBoxOrRadioNone type="checkbox" value={region} id={`region-${index}`} />
            </>
          ))}
        </div>
      </LabelContainer>
      <ExtendsLabelContainer>
        <span>학번 및 학과</span>
        <label className="title">학번</label>
        <div className="container">
          {COLLEGE_NUMBER.map((collegeNumber, index) => (
            <>
              <ExtendsCommonTag activeColor={false} htmlFor={`collegeNumber-${index}`} key={collegeNumber}>
                {collegeNumber}
              </ExtendsCommonTag>
              <CheckBoxOrRadioNone type="radio" value={collegeNumber} id={`collegeNumber-${index}`} />
            </>
          ))}
        </div>
      </ExtendsLabelContainer>
      <Major choiceMajor={choiceMajor} setChoiceMajor={setChoiceMajor} />
      <AgeTitle>평균 나이</AgeTitle>
      <RangeContainer>
        <div className="labelContainer">
          <label>{null}</label>
          <span>{`${avgAge[0]}세~${avgAge[1]}세`}</span>
        </div>
        <CustomRange value={avgAge} onChangeValue={setAvgAge} option={AVGAGE_OPTION} />
      </RangeContainer>
      <LabelContainer>
        <span>날짜 및 시간</span>
        <DatePicker
          selected={startDate}
          locale="ko"
          dateFormat="MMMM d일, aa hh:mm"
          showTimeSelect
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInput />}
        />
      </LabelContainer>
      <FullButton>등록하기</FullButton>
    </>
  );
};

export default QualificationComponent;

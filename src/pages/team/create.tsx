import styled from '@emotion/styled';
import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import CustomRange from 'src/components/shared/CustomRange';
import Layout from 'src/components/shared/Layout';
import { REGION, PARTICIPANT, COLLEGE_NUMBER } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer, RangeContainer } from 'src/theme/CommonStyle';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

const ExtendsLabelContainer = styled(LabelContainer)`
  .title {
    margin-bottom: 0.5rem;
  }
`;

const ExtendsCommonTag = styled(CommonTag)`
  margin-bottom: 0.5rem;
`;

const AVGAGE_OPTION = {
  step: 1,
  min: 20,
  max: 30,
};

const TeamCreate = () => {
  const [avgAge, setAvgAge] = useState([20, 27]);
  const [startDate, setStartDate] = useState(new Date());
  registerLocale('ko', ko);

  return (
    <Layout>
      <LabelContainer>
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
      </LabelContainer>
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
      <LabelContainer>
        <span>평균 나이</span>
      </LabelContainer>
      <RangeContainer>
        <div className="labelContainer">
          <label>{null}</label>
          <span>{`${avgAge[0]}세~${avgAge[1]}세`}</span>
        </div>
        <CustomRange value={avgAge} onChangeValue={setAvgAge} option={AVGAGE_OPTION} />
      </RangeContainer>
      <DatePicker
        selected={startDate}
        locale="ko"
        dateFormat="MMMM d일, aa hh:mm"
        showTimeSelect
        onSelect={(date) => setStartDate(date)}
      />
    </Layout>
  );
};

export default TeamCreate;

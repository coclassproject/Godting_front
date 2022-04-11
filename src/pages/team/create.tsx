import styled from '@emotion/styled';
import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Layout from 'src/components/shared/Layout';
import { REGION, PARTICIPANT, COLLEGE_NUMBER } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer } from 'src/theme/CommonStyle';

const ExtendsLabelContainer = styled(LabelContainer)`
  .title {
    margin-bottom: 0.5rem;
  }
`;

const ExtendsCommonTag = styled(CommonTag)`
  margin-bottom: 0.5rem;
`;

const TeamCreate = () => (
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
  </Layout>
);

export default TeamCreate;

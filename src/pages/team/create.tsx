import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Layout from 'src/components/shared/Layout';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer } from 'src/theme/CommonStyle';

const PARTICIPANT = [1, 2, 3, 4];

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
  </Layout>
);

export default TeamCreate;

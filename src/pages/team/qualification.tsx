import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from 'src/components/shared/Layout';
import QualificationComponent from 'src/components/team/Qualification';

const TeamQualification = () => (
  <Layout back title="조건 설정하기">
    <QualificationComponent />
  </Layout>
);

export default TeamQualification;

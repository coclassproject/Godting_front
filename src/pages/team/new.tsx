import React from 'react';
import Layout from 'src/components/shared/Layout';
import TeamCreateComponent from 'src/components/team/TeamCreate';

const TeamCreate = () => (
  <Layout bgColor back title="새 미팅방">
    <TeamCreateComponent />
  </Layout>
);

export default TeamCreate;

import React, { useState } from 'react';
import MeetingComponent from 'src/components/meeting';
import Layout from 'src/components/shared/Layout';

const Meeting = () => {
  const [noMenu, setNoMenu] = useState(false);

  return (
    <>
      <Layout back bgColor title="미팅" noMenu={noMenu}>
        <MeetingComponent setNoMenu={setNoMenu} />
      </Layout>
    </>
  );
};

export default Meeting;

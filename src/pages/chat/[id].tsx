import React from 'react';
import ChatDetail from 'src/components/Chat/Chat';
import Layout from 'src/components/shared/Layout';

const chatDetail = () => (
  <Layout noMenu bgColor back title="채팅">
    <ChatDetail />
  </Layout>
);

export default chatDetail;

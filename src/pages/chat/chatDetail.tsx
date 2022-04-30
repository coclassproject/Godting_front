import React from 'react';
import Layout from 'src/components/shared/Layout';
import ChatDetail from 'src/components/Chat/Chat';

const chatDetail = () => (
  <Layout noMenu bgColor back title="채팅">
    <ChatDetail />
  </Layout>
);

export default chatDetail;

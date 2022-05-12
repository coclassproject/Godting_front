import React from 'react';
import ChatList from 'src/components/Chat/ChatList';
import Layout from 'src/components/shared/Layout';

const chat = () => (
  <Layout noMenu bgColor back title="채팅">
    <ChatList />
  </Layout>
);

export default chat;

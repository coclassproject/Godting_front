import React from 'react';
import Layout from 'src/components/shared/Layout';
import ChatList from 'src/components/chat/ChatList';

const chat = () => (
  <Layout noMenu bgColor back title="채팅">
    <ChatList />
  </Layout>
);

export default chat;

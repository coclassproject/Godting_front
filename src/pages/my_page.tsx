import React from 'react';
import Mypage from 'src/components/mypage';
import Layout from 'src/components/shared/Layout';

const MyPage = () => (
  <Layout noMenu bgColor back title="채팅">
    <Mypage />
  </Layout>
);

export default MyPage;

import React from 'react';
import Filter from 'src/components/shared/Filter';
import Layout from 'src/components/shared/Layout';
import Main from 'src/components/home/Main';

const Home = () => (
  <Layout>
    <Filter />
    <Main />
  </Layout>
);

export default Home;

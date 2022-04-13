import React from 'react';
import Filter from 'src/components/shared/Filter';
import Layout from 'src/components/shared/Layout';
import Main from 'src/components/home/Main';
import Register from 'src/components/Register';
import HomeComponent from 'src/components/home';

const Home = () => (
  <Layout>
    {/* <Register /> */}
    <HomeComponent />
  </Layout>
);

export default Home;

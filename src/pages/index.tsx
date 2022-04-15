import React, { useState } from 'react';
import Filter from 'src/components/shared/Filter';
import Layout from 'src/components/shared/Layout';
import Main from 'src/components/home/Main';
import Register from 'src/components/Register';
import HomeComponent from 'src/components/home';

const Home = () => {
  const [noMenu, setNoMenu] = useState(false);

  return (
    <Layout noMenu={noMenu}>
      {/* <Register /> */}
      <HomeComponent setNoMenu={setNoMenu} />
    </Layout>
  );
};

export default Home;

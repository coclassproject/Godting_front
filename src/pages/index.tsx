import React, { useState } from 'react';
import HomeComponent from 'src/components/home';
import Layout from 'src/components/shared/Layout';

const Home = () => {
  const [noMenu, setNoMenu] = useState(false);

  return (
    <Layout noMenu={noMenu}>
      <HomeComponent setNoMenu={setNoMenu} />
    </Layout>
  );
};

export default Home;

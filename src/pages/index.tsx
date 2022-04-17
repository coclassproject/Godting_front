import React, { useState } from 'react';
import Filter from 'src/components/shared/Filter';
import Layout from 'src/components/shared/Layout';
import Main from 'src/components/home/Main';
import HomeComponent from 'src/components/home';
import Sign from 'src/components/Register/signup';
import SignUp from './sign_up';

const Home = () => {
  const [noMenu, setNoMenu] = useState(false);

  return (
    /*<Layout noMenu={noMenu}>
      <HomeComponent setNoMenu={setNoMenu} />
    </Layout>*/
    <SignUp />
  );
};

export default Home;

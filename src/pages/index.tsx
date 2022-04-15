<<<<<<< HEAD
import React from 'react';
import Main from 'src/components/home/Main';
import Layout from 'src/components/shared/Layout';
import SignUp from './sign_up';

const Home = () => <SignUp />;
=======
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
>>>>>>> dfff325451b6fdb53e4c2c07fe82500852774a58

export default Home;

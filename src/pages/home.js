import React, { Fragment } from 'react';
import { AboutDefault, HomeDefault } from '../components/features';

const Home = () => {
  return (
    <Fragment>
      {/* iss mein humne homedefault ke component through index.js call kiya hai jo
      features mein banaaya hai */}
      <HomeDefault />
    </Fragment>
  );
};

export default Home;

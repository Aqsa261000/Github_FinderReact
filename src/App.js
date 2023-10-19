import React, { Fragment } from 'react';
// import Home from './pages/home';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { About, Home, Profile } from './pages';

const App = () => {
  return (
    <Fragment>
      {/* reset all the margins and paddings */}
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
};

export default App;

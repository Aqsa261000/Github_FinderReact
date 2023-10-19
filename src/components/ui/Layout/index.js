import React, { Fragment } from 'react';
import { Navbar } from '../../common';
import { Box, Container } from '@mui/material';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Box component={'main'}>
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </Fragment>
  );
};

export default Layout;

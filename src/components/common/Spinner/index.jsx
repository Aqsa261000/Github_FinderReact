import { Box } from '@mui/material';
import React from 'react';
import SpinnerLogo from '../../../assets/images/loadinggif.gif';
import style from './style';

const Spinner = () => {
  return (
    <Box sx={style.flexCenter}>
      <Box component="img" src={SpinnerLogo}></Box>
    </Box>
  );
};

export default Spinner;

import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Users = ({ user }) => {
  const navigate = useNavigate();
  const profileHandler = () => {
    navigate(`/profile/${user.login}`, {
      state: { user },
    });
  };
  return (
    <Grid
      item
      xl={3}
      lg={3}
      md={4}
      sm={6}
      xs={12}
      key={user.id}
      sx={{
        // border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '30px 20px',
        // height: '20px',
        // width: '20px',

        '& img': {
          height: '70px',
          width: '70px',
          borderRadius: '100%',
          // justifySelf: 'center  ',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '10px 20px',
          width: '250px',
          margin: 'auto',
          // margin: '10px 0',
          // border: '1px solid black',
          boxShadow: '1px 3px 4px rgba(0,0,0,0.2)',

          '@media only screen and (max-width:599px)': {
            width: '100%',
            maxWidth: '75%',
            padding: '30px 20px',
          },
        }}
      >
        <Box component="img" src={user.avatar_url}></Box>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', textTransform: 'capitalize' }}
        >
          {user.login}
        </Typography>
        <Button
          type="button"
          variant="contained"
          sx={{ margin: '10px 0' }}
          onClick={profileHandler}
        >
          Profile
        </Button>
      </Box>
    </Grid>
  );
};

export default Users;

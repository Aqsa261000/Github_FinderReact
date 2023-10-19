import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from './style';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={style.spaceBetween}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate('/');
            }}
          >
            <GitHubIcon sx={style.icon} />{' '}
            <Typography variant="h6">Github Finder App</Typography>
          </IconButton>
          <Box component="ul" sx={style.flexStart}>
            <Box component="li">
              <Link to={'/about'}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  About
                </Typography>
              </Link>
            </Box>
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

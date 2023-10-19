import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import GithubIcon from '../../../assets/images/loadinggif.gif';

const SearchBar = ({ queryHandler, onClearHandler }) => {
  const [searchdata, setSearchData] = useState('');
  const onChangeHandler = (e) => {
    setSearchData(e.target.value);
    // console.log(searchdata);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    queryHandler(searchdata);
    // console.log(searchdata);
  };

  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              mt: '20px',
            }}
            onSubmit={onSubmitHandler}
          >
            {/* <Box
              component="input"
              sx={{
                height: '40px',
                width: '100%',
                borderRadius: '12px',
                borderWidth: '1.5px',
                border: '3px solid #550',
                // boxShadow: '1px 3px 4px rgba(0,0,0,0.2)',
                // border: 'none',
              }}
            ></Box> */}
            <TextField
              id="search-user"
              label="Search user"
              variant="outlined"
              value={searchdata}
              fullWidth
              onChange={onChangeHandler}
            ></TextField>
            <Button
              type="submit"
              sx={{
                fontSize: '20px',
                marginLeft: '20px',
                color: 'white',
                bgcolor: 'green',
                borderRadius: '10px',
                padding: '10px 22px',
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', margin: '0 10px', fontSize: '15px' }}
              >
                Search
              </Typography>
            </Button>
            <Button
              type="submit"
              className="icon-button"
              sx={{
                fontSize: '20px',
                marginLeft: '20px',
                color: 'white',
                bgcolor: 'orange',
                borderRadius: '10px',
                padding: '10px 22px',
              }}
              onClick={() => {
                onClearHandler();
                setSearchData('');
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', margin: '0 10px', fontSize: '15px' }}
              >
                Clear
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBar;

import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../ui/Layout';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import style from './style';
import { Spinner } from '../../common';

const ProfileDefault = () => {
  const backgroundImageUrl = '../../../assets/waterbackground.jpg';
  // const location = useLocation();
  // console.log(location);
  const [profile, setProfile] = useState({ userData: null, loading: false });
  const { name } = useParams();
  // console.log(params);

  useEffect(() => {
    const abortController = new AbortController();

    axios
      .get(`https://api.github.com/users/${name}`, {
        signal: abortController.signal,
      })
      .then((data) => {
        setProfile((prevData) => ({ ...prevData, loading: true }));
        setProfile({ userData: data.data, loading: false });
        console.log(data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.error('Operation cancelled');
        } else {
          console.log(err);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [name]);
  return (
    <Layout>
      {profile?.loading && <Spinner />}
      {!profile?.loading && profile?.userData && (
        // <Grid container sx={style.containerStyle}>
        //   <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={style.item1Style}>
        //     <Box>
        //       <Box
        //         component="img"
        //         src={profile?.userData?.avatar_url}
        //         sx={style.imageStyle}
        //       ></Box>
        //       <Typography variant="h6" sx={style.usernameStyle}>
        //         {profile?.userData?.login}
        //       </Typography>
        //       <Typography variant="body1" sx={style.locationStyle}>
        //         {profile?.userData?.location}
        //       </Typography>
        //       <Typography variant="body2" sx={style.locationStyle}>
        //         {profile?.userData?.bio}
        //       </Typography>
        //       <Button
        //         type="button"
        //         variant="contained"
        //         sx={style.buttonStyle}
        //         href={profile?.userData?.html_url}
        //       >
        //         Github Profile
        //       </Button>
        //     </Box>
        //   </Grid>

        //   <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={style.item2Style}>
        //     <Box sx={{ display: 'flex' }}>
        //       <Box
        //         sx={{
        //           display: 'flex',
        //           flexDirection: 'column',
        //           textAlign: 'center',
        //           backgroundColor: '#F8F8F8',
        //           rowGap: '50px',
        //           minWidth: '130px',
        //           borderRadius: '30px',
        //           padding: '40px 0',
        //         }}
        //       >
        //         <Box
        //           sx={{
        //             display: 'flex',
        //             alignItems: 'center',
        //             justifyContent: 'center',
        //             flexDirection: 'column',
        //           }}
        //         >
        //           <Typography variant="h4" fontWeight="600">
        //             {profile?.userData?.public_repos}
        //           </Typography>
        //           <Typography variant="body1">Public Repos</Typography>
        //         </Box>
        //         <Divider variant="middle" />

        //         <Box
        //           sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: 'center',
        //             justifyContent: 'center',
        //           }}
        //         >
        //           <Typography variant="h4" fontWeight="600">
        //             {profile?.userData?.following}
        //           </Typography>
        //           <Typography variant="body1">Following</Typography>
        //         </Box>
        //         <Divider variant="middle" />

        //         <Box
        //           sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: 'center',
        //             justifyContent: 'center',
        //           }}
        //         >
        //           <Typography variant="h4" fontWeight="600">
        //             {profile?.userData?.followers}
        //           </Typography>
        //           <Typography variant="body1">Followers</Typography>
        //         </Box>
        //       </Box>
        //       <Box
        //         sx={{
        //           marginLeft: '20px',
        //           marginTop: '50px',
        //           // border: '1px solid black',
        //         }}
        //       >
        //         <Typography
        //           variant="h6"
        //           sx={{ fontWeight: '700', fontSize: '22px' }}
        //         >
        //           Details
        //         </Typography>
        //         <Typography variant="body1" style={style.boldHeadings}>
        //           Username:{' '}
        //           <span style={style.spanElement}>
        //             {profile?.userData?.login ? profile?.userData?.login : 'NA'}
        //           </span>
        //         </Typography>
        //         <Typography variant="body1" style={style.boldHeadings}>
        //           Company:{' '}
        //           <span style={style.spanElement}>
        //             {profile?.userData?.company
        //               ? profile?.userData?.company
        //               : 'NA'}
        //           </span>
        //         </Typography>
        //         <Typography variant="body1" style={style.boldHeadings}>
        //           Github:{' '}
        //           <span style={style.spanElement}>
        //             {profile?.userData?.html_url
        //               ? profile?.userData?.html_url
        //               : 'NA'}
        //           </span>
        //         </Typography>
        //         {/* <Typography variant="h6">Website: {profile?.userData?.html_url ? (profile?.userData?.html_url) : ('NA')}</Typography> */}
        //       </Box>
        //     </Box>
        //   </Grid>
        // </Grid>
        <Grid container sx={style.containerStyle}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={style.item1Style}>
            <Box sx={style.item1styleBox}>
              <Box
                component="img"
                src={profile?.userData?.avatar_url}
                sx={style.imageStyle}
              ></Box>
              <Typography variant="h6" sx={style.usernameStyle}>
                {profile?.userData?.login}
              </Typography>
              <Typography variant="body1" sx={style.locationStyle}>
                {profile?.userData?.location}
              </Typography>
              <Typography variant="body2" sx={style.locationStyle}>
                {profile?.userData?.bio}
              </Typography>
              <Button
                type="button"
                variant="contained"
                sx={style.buttonStyle}
                href={profile?.userData?.html_url}
              >
                Github Profile
              </Button>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={style.item2Style}>
            <Box sx={style.item2styleBox}>
              {/* left side */}
              <Box
                component="div"
                sx={{
                  textAlign: 'center',
                  bgcolor: '#F7F7F7',
                  padding: '0 20px',
                  borderRadius: '20px',
                }}
              >
                <Box component="h6" sx={style.usernameStyle}>
                  {profile?.userData?.public_repos}
                  <Typography variant="body1">Public repos</Typography>
                </Box>
                <Box component="h6" sx={style.usernameStyle}>
                  {profile?.userData?.public_repos}
                  <Typography variant="body1">Following</Typography>
                </Box>
                <Box component="h6" sx={style.usernameStyle}>
                  {profile?.userData?.public_repos}
                  <Typography variant="body1">Followers</Typography>
                </Box>
              </Box>
              {/* right side */}
              <Box component="div" sx={{ margin: '50px 20px' }}>
                <Typography variant="h5" sx={{ fontWeight: '700' }}>
                  Details
                </Typography>
                <Typography variant="body1">
                  <span style={style.boldHeadings}>Username: </span>
                  {profile?.userData?.login}
                </Typography>
                <Typography variant="body1">
                  <span style={style.boldHeadings}>Company: </span>
                  {profile?.userData?.company
                    ? profile?.userData?.company
                    : 'NA'}
                </Typography>
                <Typography variant="body1">
                  <span style={style.boldHeadings}>Github: </span>
                  {profile?.userData?.html_url}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};

export default ProfileDefault;

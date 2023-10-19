import React, { useEffect, useState } from 'react';
import Layout from '../../ui/Layout';
import { Grid, Typography } from '@mui/material';
import Users from './Users';
import axios from 'axios';
import { Spinner, SearchBar } from '../../common';
import style from './styles';

// const initialState = [
//   {
//     login: 'mojombo',
//     id: 1,
//     node_id: 'MDQ6VXNlcjE=',
//     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/mojombo',
//     html_url: 'https://github.com/mojombo',
//     followers_url: 'https://api.github.com/users/mojombo/followers',
//     following_url:
//       'https://api.github.com/users/mojombo/following{/other_user}',
//     gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
//     organizations_url: 'https://api.github.com/users/mojombo/orgs',
//     repos_url: 'https://api.github.com/users/mojombo/repos',
//     events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/mojombo/received_events',
//     type: 'User',
//     site_admin: false,
//   },
//   {
//     login: 'defunkt',
//     id: 2,
//     node_id: 'MDQ6VXNlcjI=',
//     avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/defunkt',
//     html_url: 'https://github.com/defunkt',
//     followers_url: 'https://api.github.com/users/defunkt/followers',
//     following_url:
//       'https://api.github.com/users/defunkt/following{/other_user}',
//     gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
//     organizations_url: 'https://api.github.com/users/defunkt/orgs',
//     repos_url: 'https://api.github.com/users/defunkt/repos',
//     events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/defunkt/received_events',
//     type: 'User',
//     site_admin: false,
//   },
//   {
//     login: 'pjhyett',
//     id: 3,
//     node_id: 'MDQ6VXNlcjM=',
//     avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/pjhyett',
//     html_url: 'https://github.com/pjhyett',
//     followers_url: 'https://api.github.com/users/pjhyett/followers',
//     following_url:
//       'https://api.github.com/users/pjhyett/following{/other_user}',
//     gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
//     organizations_url: 'https://api.github.com/users/pjhyett/orgs',
//     repos_url: 'https://api.github.com/users/pjhyett/repos',
//     events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/pjhyett/received_events',
//     type: 'User',
//     site_admin: false,
//   },
//   {
//     login: 'pjhyett',
//     id: 4,
//     node_id: 'MDQ6VXNlcjM=',
//     avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/pjhyett',
//     html_url: 'https://github.com/pjhyett',
//     followers_url: 'https://api.github.com/users/pjhyett/followers',
//     following_url:
//       'https://api.github.com/users/pjhyett/following{/other_user}',
//     gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
//     organizations_url: 'https://api.github.com/users/pjhyett/orgs',
//     repos_url: 'https://api.github.com/users/pjhyett/repos',
//     events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/pjhyett/received_events',
//     type: 'User',
//     site_admin: false,
//   },
// ];
const HomeDefault = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({
    users: [],
    loading: false,
  });
  const queryHandler = (text) => {
    setQuery(text);
  };
  const onClearHandler = () => {
    setData({ users: [], loading: false });
  };
  useEffect(() => {
    // const getAllUsers = () => {
    //   setData((prevData) => ({ ...prevData, loading: true }));
    //   axios
    //     .get('https://api.github.com/users')
    //     .then((response) => {
    //       // console.log(data);
    //       setData({ users: response.data, loading: false });
    //     })

    //     .catch((err) => {
    //       console.log('error Message', err.message);
    //     });
    // };
    // getAllUsers();

    const getAllUsers = async () => {
      try {
        setData((prevData) => ({ ...prevData, loading: true }));
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        );
        setData({ users: response.data.items, loading: false });
      } catch (err) {
        console.log('err Message', err.message);
        setData((prevData) => ({ ...prevData, loading: false }));
      }
    };
    getAllUsers();
  }, [query]);

  // useEffect(() => {
  //   const getAllUsers = async () => {
  //     try {
  //       setData((prevState) => ({ ...prevState, loading: true }));
  //       const response = await axios.get(
  //         `https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  //       );
  //       setData({ users: response.data, loading: false });
  //     } catch (err) {
  //       console.log(err.message);
  //       setData((prevState) => ({ ...prevState, loading: false }));
  //     }
  //   };
  //   getAllUsers();
  // },[])
  // console.log(data.users);
  return (
    <Layout>
      <Grid container sx={style.containerStyle}>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', width: '100%', fontWeight: '700' }}
        >
          Search User
        </Typography>
        <SearchBar
          queryHandler={queryHandler}
          onClearHandler={onClearHandler}
        />
        {data.loading && <Spinner />}

        {!data.loading &&
          data.users &&
          data.users.length > 0 &&
          data.users.map((user) => <Users key={user.id} user={user} />)}
      </Grid>
    </Layout>
  );
};

export default HomeDefault;

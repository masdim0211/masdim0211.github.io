import React, {useEffect, useMemo, useReducer, useState} from 'react'
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Axios from 'axios';

import { GithubContext } from 'contexts/GithubContext';
import { BASE_API_URL } from 'configs/config'

// layouts

import WelcomePage from 'pages/WelcomePage';
import ListReposPage from 'pages/ListReposPage';
import history from 'utils/history';

function App({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'NO_USER':
          return {
            ...prevState,
          };
        case 'START_LOADING':
          return {
            ...prevState,
            isLoading: true
          };
        case 'STOP_LOADING':
          return {
            ...prevState,
            isLoading: false
          };
        case 'ADD_DATA_USER':
          return {
            ...prevState,
            username: action.username,
            photoUser: action.photoUser,
            dataUser: action.dataUser,
            isLoading: action.isLoading
          };
        case 'REMOVE_DATA_USER':
          return {
            ...prevState,
            username: null,
            dataUser: null,
            photoUser: null,
            isLoading: action.isLoading
          };
        default:
            return
      }
    },
    {
      isLoading: false,
      username: null,
      photoUser: null,
      dataUser: null
    }
  );

  const githubContext = useMemo(
      () => ({
        username: state.username,
        dataUser: state.dataUser,
        isLoading: state.isLoading,
        photoUser: state.photoUser,
        getDataRepos: data => {
          dispatch({type: 'START_LOADING'});
          Axios.get(`${BASE_API_URL}users/${data.username}/repos`).then(res => {
            console.log(res.data[0].owner.avatar_url);
            dispatch({
              type: 'ADD_DATA_USER',
              username: res.data[0].owner.login,
              photoUser: res.data[0].owner.avatar_url,
              dataUser: res.data,
              isLoading: false
            });
            history.push("/list-repos/"+data.username);
          }).catch(e => {
            dispatch({type: 'STOP_LOADING'});
            alert('Username tidak ditemukan!')
          })
        },
        signOut: () => {
          dispatch({
            type: 'SIGN_OUT',
          });
          window.location.replace('/')
        }
      }),
      [state.username, state.dataUser, state.isLoading, state.photoUser]
  );

  return (
    <GithubContext.Provider value={githubContext}>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={WelcomePage} />
          <Route path="/list-repos/:username" component={ListReposPage} />
          <Redirect from="*" to="/home" />
        </Switch>
      </Router>
    </GithubContext.Provider>
  );
}

export default App;

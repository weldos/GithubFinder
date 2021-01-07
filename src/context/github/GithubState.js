import React, {useReducer} from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';

import {SEARCH_USERS,GET_USER, SET_LOADING,CLEAR_USER} from '../types';


//create our initial state
const GithubState=props=>{
    const initialState={
        users: [],
        loading: false,
        msg: '',
        type: '',
        userdetails: {}
    }


const [state, dispatch]=useReducer(githubReducer, initialState);


//Search users
const searchUsers = async (text) => {
    //console.log(text);
    // this.setState({ loading: true });
    setLoading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
        type:SEARCH_USERS,
        payload:res.data.items
    })
   
    //setUsers(res.data.items);
   
    
  }

  //Set loading function
  const  setLoading=()=>dispatch({type:SET_LOADING})




//Get User function
const getUser = async (username) => {
    // this.setState({ loading: true });
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //this.setState({ userdetails: res.data, loading: false })
     dispatch({
        type: GET_USER,
        payload: res.data
     });
    };

//Clear User function
const clearUsers = () => dispatch({type:CLEAR_USER})

    // {
    //      this.setState({ users: [], loading: false })
    //      setUsers([]);
    //      setLoading(false);
    //  };

return(<githubContext.Provider

        value={{
            users:state.users,
            userdetails:state.userdetails,
            loading:state.loading,
            searchUsers,
            clearUsers,
            getUser
        }}

        >{props.children}
    
    </githubContext.Provider>)
}
    export default GithubState;

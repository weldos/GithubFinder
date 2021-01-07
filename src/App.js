import React, {Fragment} from 'react';
// import axios from 'axios'


//importing CSS
import './App.css';


//Importing Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Singleuser from "./components/users/Singleuser";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Links from "./components/pages/Links";
import PageError from "./components/layout/PageError";

// importing routers module from (npm i react-router-dom) 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Importing contexts
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App" >
            <Navbar />
              <div className="container">
                <Alert />

                <Switch>

                  {/* Frst route - index */}
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search />
                          {/* //clearUsers={clearUsers} 
                          //showClear={users.length > 0 ? true : false} 
                          // setAlert={setAlert}  */}

                      <Users  />
                    </Fragment>
                  )} />

                  {/* Second route - about */}

                    <Route exact path='/about' component={About}/>

                   
                  {/* third route - single user */}
                    <Route exact path='/users/:login' render={props => (
                      <Singleuser {...props} />
                      // getUser={getUser} 
                      // userdetails={userdetails} 
                      // loading={loading} 
                  )} />

       
                  {/* Fourth Route - Links*/}

                    <Route exact path='/links' component={Links}/>


                  {/* Not found - route error component */}

                    <Route component = { PageError } />

                 </Switch>

               </div>

            </div>
        </Router>
      </AlertState>
    </GithubState>
    );
}


export default App;

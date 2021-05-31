import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import styled from "styled-components"
import Sidebar from "./components/Sidebar"
import Chat from './components/Chat';

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Spinner from "react-spinkit"

function App() {
  
  const [user, loading ] = useAuthState(auth)

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
          <Spinner
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
           />
        </AppLoadingContents>
      </AppLoading>
    )
  }


  return (
    <div className="App">
      <Router>
        {!user ? (<Login/>):(
          <>
            <Header />
            <AppBody>
              <Sidebar/>
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
    </Router>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  `
const AppLoading = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
  align-items: center;
`

const AppLoadingContents = styled.div``
export default App;

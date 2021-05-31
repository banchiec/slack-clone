import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import styled from "styled-components"
import Sidebar from "./components/Sidebar"
import Chat from './components/Chat';

import { useAuthState } from "react-firebase-hooks"
import { auth } from "./firebase"


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  const [user, loading ] = useAuthState(auth)

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
export default App;

import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import styled from "styled-components"
import Sidebar from "./components/Sidebar"


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar/>
          <Switch>
            <Route path="/" exact>
              <Chat />
              {/* chat */}
            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>

     
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  `
export default App;

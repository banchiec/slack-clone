import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import styled from "styled-components"


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
        </AppBody>
        <Switch>
          <Route path="/" exact>
            {/* chat */}

          </Route>
        </Switch>
      </>
    </Router>

     
    </div>
  );
}

const AppBody = styled.div`

  `
export default App;

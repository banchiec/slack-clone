import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header'

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
        <Switch>
         <Route path="/">
           <Header />
           <h1>This is homepage</h1>
          </Route>
        </Switch>
      </>
    </Router>

     
    </div>
  );
}

export default App;

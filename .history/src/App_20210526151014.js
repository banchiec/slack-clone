import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <>
        <Switch>
         <Route path="/">
           <h1>This is home page</h1>
          </Route>
        </Switch>
      </>
    </Router>

     
    </div>
  );
}

export default App;

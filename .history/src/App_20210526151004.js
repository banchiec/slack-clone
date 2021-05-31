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
            </>
          </Route>
        </Switch>
      </>
    </Router>

     
    </div>
  );
}

export default App;

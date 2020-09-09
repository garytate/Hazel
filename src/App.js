import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link } from "react-router-dom";
import Activity from './Activity';
import Keywords from './Keywords';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
          <h1>Hello World!!!!</h1>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
            <Link to="/keywords">Keywords</Link>

            <Switch>
              <Route path="/activity">
                <Activity />
              </Route>
              <Route path="/keywords">
                <Keywords />
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;

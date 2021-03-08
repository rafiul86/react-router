import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CountryDetails from "./component/CountryDetails/CountryDetails";
import Home from './component/Home/Home';
import Nomatch from "./component/Nomatch/Nomatch";

function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route path='/home'>
            <Home></Home>
            </Route>
            <Route path = '/country/:countryCode'>
              <CountryDetails></CountryDetails>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <Nomatch></Nomatch>
            </Route>
          </Switch>
        </Router>
        
      </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Registry from './Components/Registry/Registry';
import Rsvp from './Components/Rsvp/Rsvp';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
              <Route exact path='/' component={ Home }/>
              <Route path='/Rsvp' component={ Rsvp }/>
              <Route path='/Registry' component={ Registry }/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;

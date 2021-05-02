import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SummerJob from './pages/SummerJob';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/profile/:username" component={ Profile } />
          <Route path="/summerjobexemple" component={ SummerJob } />
        </Switch>
      </Fragment>
    );
  }
}

export default App;

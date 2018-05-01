import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Vehicle from './components/Vehicle';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/vehicle/:id' component={Vehicle} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

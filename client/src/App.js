import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RegisterView from './views/RegisterView';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/register' component={RegisterView}/> 
        {/* <Route path='/login' component={}/> 
        <Route path='/users' exact component={}/>  */}
      </div>
    );
  }
}

export default App;

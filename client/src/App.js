import React, { Component } from 'react';
import { Route } from 'react-router-dom';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/register' component={}/> 
        <Route path='/login' component={}/> 
        <Route path='/users' exact component={}/> 
      </div>
    );
  }
}

export default App;

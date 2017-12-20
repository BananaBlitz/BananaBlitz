import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <SignIn />
      </div> 
    );
  }
}

export default App;

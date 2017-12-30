import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';
import Player from './components/Player/Player'

  class App extends Component {
  state = {
    userInput: ''
  } 

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value.toUpperCase()} );
  }


  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} />;
    });

    return (
      <div className="App">
        <Player 
          changed={(event) => this.inputChangedHandler(event)}
           />
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
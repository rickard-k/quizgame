import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Quiz from './Quiz';



class App extends Component {

  render() {

    return (
      <div className="App">

        <header className="App-header"> 
          <h1>Welcome to the Random Quiz Generator!</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Menu /> */}
         
        </header>

        <div className="main">

          <p id="boo"></p>

          <Quiz />

        </div>

      </div>
    );
  }
}

export default App;

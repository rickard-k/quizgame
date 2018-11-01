import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz';

// import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      difficulty: null,
      qAmount: null,
      };

    this.selectCategory = this.selectCategory.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
    this.selectQuestions = this.selectQuestions.bind(this);
  }

  selectCategory(event) {
    this.setState({category: event.target.value});
  }

  selectDifficulty(event) {
    this.setState({difficulty: event.target.value});
  }

  selectQuestions(event) {
    this.setState({qAmount: event.target.value});
  }

  render() {

    // const generateQuiz = <button></button>

    return (
      <div className="App">

        <header className="App-header">
          <h1>Welcome to the Random Quiz Generator!</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <div className="menuContainer">
            <div className="menuDiv1">
              <label>Select category:</label><br></br>
              <select onChange={this.selectCategory}>
                <option value="17">Science</option>
                <option value="18">Computers</option>
                <option value="11">Movies</option>
                <option value="12">Music</option>
              </select>
            </div>

            <div className="menuDiv2">
              <label>Select difficulty:</label><br></br>
              <select onChange={this.selectDifficulty}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="menuDiv3">
              <label>Select number of questions:</label><br></br>
              <select onChange={this.selectQuestions}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>

          <div id="boo"></div>
        </header>

        <div className="main">
          <p></p>
          <Quiz 
            category={this.state.category}
            difficulty={this.state.difficulty}
            questionAmount={this.state.qAmount}
          />
        </div>

      </div>
    );
  }
}

export default App;

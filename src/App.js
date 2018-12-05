import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz';
import Qheader from './Qheader';

// import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      difficulty: null,
      qAmount: null,
    };
  }

  selectCategory = (event) => {
    this.setState({ category: event.target.value });
  }

  selectDifficulty = (event) => {
    this.setState({ difficulty: event.target.value });
  }

  selectQuestions = (event) => {
    this.setState({ qAmount: event.target.value });
    console.log(this.state.qAmount)
  }

  render() {

    if (this.state.category && this.state.difficulty && this.state.qAmount) {
      return (
        <div className="App">
          <Qheader 
            selectCategory={this.selectCategory}
            selectDifficulty={this.selectDifficulty}
            selectQuestions={this.selectQuestions}
          />

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
    } else {
      return (
        <div className="App">
          <Qheader 
            selectCategory={this.selectCategory}
            selectDifficulty={this.selectDifficulty}
            selectQuestions={this.selectQuestions}
          />
          <div className="main">
          </div>
        </div>
      );
    }
  }
}

export default App;

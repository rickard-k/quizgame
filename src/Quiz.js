import React, { Component } from 'react';

class Quiz extends Component {

  constructor(props){
    super(props);
    this.state = {
      spinner: 'Loading...',
      currentQuestion: 1,
      amountCorrectlyAnswered: 0,
      category: 'Science: Computers',
      difficulty: 'medium',
      questionAmount: 10,
      questions: null,
    }
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple')
      .then(res => res.json())
      .then(data => {
        this.setState({ questions: data.results });
    });
  }

  playerAnswer = (playerAnswer, correctAnswer) => {
    if ( (playerAnswer === correctAnswer) && this.state.questions ) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        amountCorrectlyAnswered: this.state.amountCorrectlyAnswered + 1,
      });
      document.querySelector('#boo').innerHTML = 'Your answer to the previous question was correct!';
    } else {
      this.setState({currentQuestion: this.state.currentQuestion + 1})
      document.querySelector('#boo').innerHTML = 'Your answer to the previous question was wrong.';
    }
  }

  render() {
    const answers = [null, null, null, null];
    const correctAnswerIndex = Math.floor(Math.random() * 4)

    if ( this.state.questions !== null && this.state.currentQuestion <= this.state.questionAmount) {

      answers[correctAnswerIndex] = this.state.questions[this.state.currentQuestion - 1].correct_answer;
      let wrongAnswerIndex = 0;

      for(let i = 0; i <= 3; i += 1) {

        if(answers[i] === null) { 
          answers[i] = this.state.questions[this.state.currentQuestion - 1].incorrect_answers[wrongAnswerIndex];
          wrongAnswerIndex += 1;
        }

      }

    }

    const quiz = (this.state.questions && this.state.currentQuestion <= this.state.questionAmount) ?
      (<div id="quizWindow">
        <h3>Question {this.state.currentQuestion}:</h3>
        <p>{ this.state.questions[this.state.currentQuestion - 1].question }</p>
        <ol>
          <li>
            <button 
              onClick={() => this.playerAnswer(0, correctAnswerIndex)}>
            { answers[0] }
            </button>
          </li>
          <li>
            <button 
              onClick={() => this.playerAnswer(1, correctAnswerIndex)}>
            { answers[1] }
            </button>
          </li>
          <li>
            <button 
              onClick={() => this.playerAnswer(2, correctAnswerIndex)}>
            { answers[2] }
            </button>
          </li>
          <li>
            <button 
              onClick={() => this.playerAnswer(3, correctAnswerIndex)}>
            { answers[3] }
            </button>
          </li>
        </ol>
        
      </div>) 
      : 
      null;

    if(this.state.currentQuestion > this.state.questionAmount) {
      let finalResult = 
      <h3>
        You answered {this.state.amountCorrectlyAnswered}<span> </span>
         out of {this.state.questionAmount} questions correctly
      </h3>;
      return finalResult;
      
    } else {
      return ( quiz );
    }
  }
}

export default Quiz;
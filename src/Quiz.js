import React, { Component } from 'react';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      amountCorrectlyAnswered: 0,
      category: null,
      difficulty: null,
      questionAmount: 10,
      questions: null,
      responseCode: null,
    }
  }

  componentDidMount() {

    this.setState({
      category: this.props.category,
      difficulty: this.props.difficulty,
      questionAmount: this.props.questionAmount,
    });

    fetch(`https://opentdb.com/api.php?amount=${this.props.questionAmount}&category=${this.props.category}&difficulty=${this.props.difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          questions: data.results,
          responseCode: data.response_code,
        });
        return data;
      })
  }


  playerAnswer = (playerAnswer, correctAnswer) => {
    if ((playerAnswer === correctAnswer) && this.state.questions) {
      this.setState( prevState => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
          amountCorrectlyAnswered: prevState.amountCorrectlyAnswered + 1,
        }
      });
      document
        .querySelector('#boo')
        .innerHTML =
        'Your answer to the previous question was <span id="correct">correct!</span>';
    } else {
      this.setState( prevState => {
        return {
          currentQuestion: this.state.currentQuestion + 1 
        }
        });
      document
        .querySelector('#boo')
        .innerHTML =
        `Your answer to the previous question was <span id="wrong">wrong</span>.<br>
        The correct answer was ${this.state.questions[this.state.currentQuestion - 1].correct_answer}`;
    }
  }

  render() {
    const answers = [null, null, null, null];
    const correctAnswerIndex = Math.floor(Math.random() * 4)

    if (this.state.responseCode === 0 && this.state.currentQuestion <= this.state.questionAmount) {

      answers[correctAnswerIndex] = this.state.questions[this.state.currentQuestion - 1].correct_answer;

      let wrongAnswerIndex = 0;

      for (let i = 0; i <= 3; i += 1) {
        if (answers[i] === null) {
          answers[i] =
            this
              .state
              .questions[this.state.currentQuestion - 1]
              .incorrect_answers[wrongAnswerIndex];
          wrongAnswerIndex += 1;
        }
      }
    }

    const quiz = (this.state.responseCode === 0 && this.state.currentQuestion <= this.state.questionAmount) ?
      (<div className="quizWindow">
        <h3>Question {this.state.currentQuestion}:</h3>
        <p dangerouslySetInnerHTML={{ __html: this.state.questions[this.state.currentQuestion - 1].question }}>
        </p>
        <ul>
          <li>
            <button
              onClick={() => this.playerAnswer(0, correctAnswerIndex)}
              dangerouslySetInnerHTML={{ __html: `${answers[0]}` }}>
            </button>
          </li>
          <li>
            <button
              onClick={() => this.playerAnswer(1, correctAnswerIndex)}
              dangerouslySetInnerHTML={{ __html: `${answers[1]}` }}
            >
            </button>
          </li>
          <li>
            <button
              onClick={() => this.playerAnswer(2, correctAnswerIndex)}
              dangerouslySetInnerHTML={{ __html: `${answers[2]}` }}
            >
            </button>
          </li>
          <li>
            <button
              onClick={() => this.playerAnswer(3, correctAnswerIndex)}
              dangerouslySetInnerHTML={{ __html: `${answers[3]}` }}
            >
            </button>
          </li>
        </ul>

      </div>)
      :
      null;

    const resCode = this.state.responseCode;

    if (this.state.currentQuestion > this.state.questionAmount) {
      let finalResult =
        <div className="quizWindow">
          <h3>
            <p>You answered {this.state.amountCorrectlyAnswered}<span> </span>
              out of {this.state.questionAmount} questions correctly.</p>
            <p><a href="/"><button>New quiz</button></a></p>
          </h3>
        </div>;
      return finalResult;
    } else if (resCode === 0) {
      return quiz;
    } else if (resCode === 1) {
      return <p>Sorry! Not enough questions for what you have chosen.</p>;
    } else if (resCode === 2 || resCode === 3 || resCode === 4 || resCode === 5) {
      return <p>ERROR!</p>
    } else {
      return null;
    }
  }
}

export default Quiz;
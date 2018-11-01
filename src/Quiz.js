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
    }
  }

  componentDidMount() {

    this.setState({
      category: this.props.category,
      difficulty: this.props.difficulty,
      questionAmount: this.props.questionAmount,
    });

    console.log(this.state);

    console.log(`https://opentdb.com/api.php?amount=${this.state.questionAmount}&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`)

    fetch(`https://opentdb.com/api.php?amount=${this.props.questionAmount}&category=${this.props.category}&difficulty=${this.props.difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        this.setState({ questions: data.results });
        return data;
      })
      .then(x => console.log(x));
  }


  playerAnswer = (playerAnswer, correctAnswer) => {
    if ((playerAnswer === correctAnswer) && this.state.questions) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        amountCorrectlyAnswered: this.state.amountCorrectlyAnswered + 1,
      });
      document
        .querySelector('#boo')
        .innerHTML =
        'Your answer to the previous question was <span id="correct">correct!</span>';
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 })
      document
        .querySelector('#boo')
        .innerHTML =
        'Your answer to the previous question was <span id="wrong">wrong</span>.';
    }
  }

  render() {
    const answers = [null, null, null, null];
    const correctAnswerIndex = Math.floor(Math.random() * 4)

    if (this.state.questions && this.state.currentQuestion <= this.state.questionAmount) {

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

    const quiz = (this.state.questions && this.state.currentQuestion <= this.state.questionAmount) ?
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

    if (this.state.currentQuestion > this.state.questionAmount) {
      let finalResult =
        <div className="quizWindow">
          <h3>
            You answered {this.state.amountCorrectlyAnswered}<span> </span>
            out of {this.state.questionAmount} questions correctly
        </h3>
        </div>;
      return finalResult;
    } else {
      return quiz;
    }
  }
}

export default Quiz;
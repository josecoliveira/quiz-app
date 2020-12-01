import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Home from './components/Home';
import Question from './components/Question';
import Score from './components/Score';

const apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "loading",
      questionNumber: -1
    };
    this.score = 0;
  }

  componentDidMount() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState((state, props) => ({
          screen: "home"
        }));
        this.questions = data.results;
      });
  }

  handleBegin() {
    this.setState((state, props) => ({
      questionNumber: state.questionNumber + 1,
      screen: "question"
    }));
  }

  handleAnswer(answer) {
    const questionNumber = this.state.questionNumber;
    this.questions[questionNumber].playerAnswer = answer;
    if (this.questions[questionNumber].correct_answer === answer) {
      this.score++;
    }
    if (questionNumber + 1 === 10) {
      this.setState((state, props) => ({
        screen: "score"
      }));
    } else {
      this.setState((state, props) => ({
        questionNumber: questionNumber + 1
      }));
    }
  }

  handlePlayAgain() {
    this.setState((state, props) => ({
      screen: "loading"
    }));
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState((state, props) => ({
          screen: "home",
          questionNumber: -1
        }));
        this.score = 0;
        this.questions = data.results;
      });
  }

  renderLoading() {
    return (
      <Container className="content">
        <p>Loading...</p>
      </Container>
    );
  }

  renderHome() {
    return (
      <Home handleBegin={() => this.handleBegin()}/>
    );
  }

  renderQuestion() {
    const questionNumber = this.state.questionNumber;
    const question = this.questions[questionNumber];
    return (
      <Question
        question={question}
        handleAnswer={(answer) => this.handleAnswer(answer)}
        questionNumber={questionNumber + 1} />
    );
  }

  renderScore() {
    const questions = this.questions;
    const score = this.score;
    return (
      <Score
        questions={questions}
        score={score}
        handlePlayAgain={() => this.handlePlayAgain()} />
    );
  }

  render() {
    const screen = this.state.screen;
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="\">QuizApp</Navbar.Brand>
        </Navbar>
        {
          (() => {
            if (screen === "loading") {
              return this.renderLoading();
            } else if (screen === "home") {
              return this.renderHome();
            } else if (screen === "question") {
              return this.renderQuestion();
            } else if (screen === "score") {
              return this.renderScore();
            }
          })()
        }
      </div>
    );
  }
}

export default App;
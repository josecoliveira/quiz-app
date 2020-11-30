import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Home from './components/Home';
import Question from './components/Question';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "home",
      questionNumber: -1,
      loading: true
    };
    this.score = 0;
  }

  componentDidMount() {
    const apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState((state, props) => ({
          loading: false
        }));
        this.questions = data.results;
        console.log(data);
      });
  }

  handleBegin() {
    console.log("Test");
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
    console.log("questionNumber " + questionNumber);
    if (questionNumber + 1 === 10) {
      console.log("show score")
      this.setState((state, props) => ({
        screen: "score"
      }));
    } else {
      console.log("next question")
      this.setState((state, props) => ({
        questionNumber: questionNumber + 1
      }));
    }
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

  render() {
    const screen = this.state.screen;
    const loading = this.state.loading;
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="\">QuizApp</Navbar.Brand>
        </Navbar>
        {
          (() => {
            if (loading) {
              return this.renderLoading();
            } else if (screen === "home") {
              return this.renderHome();
            } else if (screen === "question") {
              return this.renderQuestion();
            } else if (screen === "score") {
              return <p>Score</p>
            }
          })()
        }
      </div>
    );
  }
}

export default App;
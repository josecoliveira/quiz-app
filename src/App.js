import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "home",
      question: 0
    }
  }

  handleBegin() {
    console.log("Test");
    this.setState((state, props) => ({
      question: state.question + 1,
      screen: "question"
    }));
  }

  render() {
    return (
      <div>
        <Home handleBegin={this.handleBegin}/>
        <p>{this.state.question}</p>
        <p>{this.state.screen}</p>
      </div>
    );
  }
}

export default App;
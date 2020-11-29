import React from 'react';

import Button from 'react-bootstrap/Button';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be present with 10 True of False questions.</p>
        <p>Can you score 100%</p>
        <Button
          variant="primary"
          onClick={() => this.props.handleBegin()}
        >
          BEGIN
        </Button>
      </div>
    );
  }
}

export default Home;
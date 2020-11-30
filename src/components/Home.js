import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {

  render() {
    const handleBegin = this.props.handleBegin;
    return (
      <Container className="content">
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You will be present with 10 True of False questions.</p>
        <p>Can you score 100%</p>
        <Button
          variant="primary"
          onClick={() => handleBegin()}
        >BEGIN</Button>
      </Container>
    );
  }
}

export default Home;
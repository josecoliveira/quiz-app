import React from 'react';
import he from 'he'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Question extends React.Component {
  render() {
    const question = this.props.question;
    const handleAnswer = this.props.handleAnswer;
    const questionNumber = this.props.questionNumber;
    return (
      <Container className="content">
        <Row md={12}>
          <h3>{question.category}</h3>
          <Card>
            <Card.Body>
              <Card.Text>
                {he.decode(question.question)}
              </Card.Text>
              <Button
                className="answer-option"
                variant="success"
                onClick={() => handleAnswer("True")}
              >True</Button>
              <Button
                className="answer-option"
                variant="danger"
                onClick={() => handleAnswer("False")}
              >False</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{questionNumber} of 10</Card.Footer>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Question;
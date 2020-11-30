import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function convert(str) {
  str = str.replace(/&amp;/g, "&");
  str = str.replace(/&gt;/g, ">");
  str = str.replace(/&lt;/g, "<");
  str = str.replace(/&quot;/g, '"');
  str = str.replace(/&#039;/g, "'")
  return str;
}

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
                {convert(question.question)}
              </Card.Text>
              <Button
                className="answer-option"
                variant="success"
                onClick={() => handleAnswer(true)}
              >True</Button>
              <Button
                className="answer-option"
                variant="danger"
                onClick={() => handleAnswer(false)}
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
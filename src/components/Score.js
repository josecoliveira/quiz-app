import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import he from 'he'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class Score extends React.Component {

  render() {
    const score = this.props.score;
    const questions = this.props.questions;
    const handlePlayAgain = this.props.handlePlayAgain;
    return (
      <Container className="content">
        <Row>
          <Col md={12}>
            <h2>You scored<br/>{score} / 10</h2>
          </Col>
        </Row>
        <ListGroup as="ul" variant="flush" className="questions-list">
          {
            questions.map((question, index) => {
              if (question.correct_answer === question.playerAnswer) {
                return (
                  <ListGroup.Item key={index} as="li" eventKey={index} className="item-list">
                    <div className="icon-list">
                      <FaCheck className="icon-list" size={30} style={{color: "green"}} />
                    </div>
                    <div>
                      {he.decode(question.question)}
                    </div>
                  </ListGroup.Item>
                );
              } else {
                return (
                  <ListGroup.Item className="item-list">
                    <div className="icon-list">
                      <FaTimes className="icon-list" size={30} style={{color: "red"}} />
                    </div>
                    <div>
                      {he.decode(question.question)}
                    </div>
                  </ListGroup.Item>
                );
              }
            })
          }
        </ListGroup>
        <Button
          variant="primary"
          onClick={() => handlePlayAgain()}
        >Play Again?</Button>
      </Container>
    );
  }
}

export default Score;
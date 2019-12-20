import React from "react";
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';

const CurrentPane = (props) => {

  return (
      <Container className="current-pane">
        <Row> 
          <Col className="prev-col" md="3">
            <button onClick={props.previous} type="submit">Prev</button>
          </Col>
          <Col md="6">   
            <Player 
              player={props.currentPlayer} 
              remove={props.remove}
            />
          </Col>
          <Col className="next-col" md="3">
            <button onClick={props.next} type="submit">Next</button>
          </Col>
        </Row>
      </Container>
  )
}

export default CurrentPane;

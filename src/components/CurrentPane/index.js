import React from "react";
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';

const CurrentPane = (props) => {

  return (
      <Container className="current-pane">
        <Row> 
          <Col xs={{ size:6, order: 2 }} md={{ size:3, order:1 }} className="prev-col">
            <button className="button" onClick={props.previous} type="submit">Prev</button>
          </Col>
          <Col xs={{  order: 1 }} md={{ size:6, order:1 }} >   
            <Player 
              player={props.currentPlayer} 
              remove={props.remove}
            />
          </Col>
          <Col xs={{ size:6, order: 2 }} md={{ size:3, order:1  }} className="next-col">
            <button className="button" onClick={props.next} type="submit">Next</button>
          </Col>
        </Row>
      </Container>
  )
}

export default CurrentPane;

import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';

const CurrentPane = (props) => {

  return (
      <Container className="current-pane">
        <Row> 
          <Col>
          </Col>
          <Col>        
            <Player name={props.currentPlayer.name} 
              key={props.currentPlayer.key} 
              type={props.currentPlayer.type} 
              init={props.currentPlayer.init} 
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
  )
}

export default CurrentPane;

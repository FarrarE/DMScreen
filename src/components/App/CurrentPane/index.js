import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';

const CurrentPane = (props) => {

  return (
    <div className="player-card">
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
    </div>
  )
}

export default CurrentPane;

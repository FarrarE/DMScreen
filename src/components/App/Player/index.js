import React from 'react';
import { Container, Col, Row, TabPane, TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import './styles.css'

const Player = (props) => {

  return (
    <Container className="player-card">
      <Row>
        <Col></Col>
        <Col>
          {JSON.stringify(props.name)}
          {JSON.stringify(props.key)}
          {JSON.stringify(props.type)}
          {JSON.stringify(props.init)}
        </Col>
        <Col>
          <div className="close">X</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Player;
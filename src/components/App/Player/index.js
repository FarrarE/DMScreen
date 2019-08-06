import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css'
import monster from './assets/Orc.png';
import player from "./assets/Player.png";

class Player extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(event) {

      this.props.remove(this.props.ukey);
  }

  render() {
    let icon;

    if(this.props.type === "monster")
      icon = monster;
    else  
      icon = player;
    
  return (
    <Container className="player-card">
      <Row>
 

        <Col className="icon-col" md="1">

          <img src={icon} alt={"..."}></img> 
        </Col>
        <Col md="3">

          <label>Name</label><br></br>
          {this.props.name}
        </Col>
        <Col md="3">
          <label>Type</label><br></br>
          {this.props.type}
        </Col>
        <Col md="3">
          <label>Initiative</label><br></br>
          {this.props.init}
        </Col>
        <Col className="close-col" md="2">
          <button onClick={this.handleRemove} className="close">X</button>
        </Col>
      </Row>
    </Container>
  )}
}

export default Player;
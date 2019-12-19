import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css'
import monster from './assets/Orc.png';
import player from "./assets/Player.png";

class Player extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      type: props.type,
      key: props.key,
      init: props.init
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      init: event.target.value
    });
  }
  
  handleRemove(event) {

    this.props.remove(this.props.ukey);
  }

  render() {

    let icon;
    let name = this.state.name;
    let key = this.state.key;
    let type = this.state.type;
    let init = this.state.init;

    if(this.props.type === "monster")
      icon = <img className="monster-icon" src={monster} alt={"..."}></img> 
    else  
      icon = <img className="player-icon" src={player} alt={"..."}></img> 
    
  return (
    <Container className="player-card">
      <Row>
        <Col md="2">
          <div className="icon-col" >
            <div className="icon-div">
              {icon}
            </div>
          </div>
        </Col>
        <Col md="3">
          <label><h5>Name</h5></label><br></br>
          {name}
        </Col>
        <Col md="3">
          <label><h5>Type</h5></label><br></br>
          {type}
        </Col>
        <Col md="3">
          <label><h5>Initiative</h5></label><br></br>
          {init}
        </Col>
        <Col className="close-col" md="1">
          <button onClick={this.handleRemove} className="close">X</button>
        </Col>
      </Row>
    </Container>
  )}
}

export default Player;
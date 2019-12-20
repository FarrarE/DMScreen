import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'reactstrap';
import './styles.css'
import monster from './assets/Orc.png';
import player from "./assets/Player.png";

function Player(props){
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if(props.player){
      if(props.player.type === "monster")
        setIcon(<img className="monster-icon" src={monster} alt={"..."}></img>);
      else  
        setIcon(<img className="player-icon" src={player} alt={"..."}></img>);
    }

  },[props.player]);

  function handleRemove(event) {
    props.remove(props.player.ukey);
  }

  return (
    <Container className="player-card">
      {props.player && 
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
            {props.player.name}
          </Col>
          <Col md="3">
            <label><h5>Type</h5></label><br></br>
            {props.player.type}
          </Col>
          <Col md="3">
            <label><h5>Initiative</h5></label><br></br>
            {props.player.init}
          </Col>
          <Col className="close-col" md="1">
            <button onClick={handleRemove} className="close">X</button>
          </Col>
        </Row>
      }
    </Container>
  )
}

export default Player;
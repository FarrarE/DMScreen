import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'reactstrap';
import './styles.css'
import monster from './assets/Orc.png';
import player from "./assets/Player.png";

function Player(props) {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (props.player) {
      if (props.player.type === "monster")
        setIcon(<img className="monster-icon" src={monster} alt={"..."}></img>);
      else
        setIcon(<img className="player-icon" src={player} alt={"..."}></img>);
    }

  }, [props.player]);

  function handleRemove(event) {
    props.remove(props.player.ukey);
  }

  function updateInput(event) {
    props.onChange(event);
  }

  return (
    <div className="player-card">
      {props.player &&
        <Row>
          <Col xs={{ order: 1, size: 2 }} md={{ size: 2, order: 1 }}>
            <div className="icon-col" >
              <div className="icon-div">
                {icon}
              </div>
            </div>
          </Col>
          <Col xs={{ order: 2, size: 3 }} md={{ size: 3, order: 1 }}>
            <label><h5>Name</h5></label><br></br>
            {props.player.name}
          </Col>
          <Col xs={{ order: 2, size: 3 }} md={{ size: 3, order: 1 }}>
            <label><h5>Type</h5></label><br></br>
            {props.player.type}
          </Col>
          <Col xs={{ order: 2, size: 3 }} md={{ size: 3, order: 1 }}>
            <label><h5>Initiative</h5></label><br></br>
            <input id={props.player.name} className="init-input" type="number" value={props.player.init} maxLength="3" onChange={updateInput} />
          </Col>
          <Col className="close-col" xs={{ order: 3 }} md={{ size: 1, order: 1 }}>
            <button className="button" onClick={handleRemove} className="close">X</button>
          </Col>
        </Row>
      }
    </div>
  )
}

export default Player;
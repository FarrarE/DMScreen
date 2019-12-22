import React, { useState } from "react";
import { Container, Row, Col, TabPane, TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import classnames from 'classnames';
import monster from '../Player/assets/Orc.png';
import player from '../Player/assets/Player.png';


export default function AddPane(props){
  const [activeTab, setActiveTab] = useState("player");
  const [name, setName] = useState();
  const [init, setInit] = useState();

  function toggle(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  function genUkey(seed){
    return Math.floor((Math.random() * 99999) + 10000) + seed + Math.floor((Math.random() * 99999) + 10000);
  }

  function handleSubmitPlayer(type) {
    let user = {
      name: name,
      ukey: genUkey(name),
      type: type,
      init: init
    }

    props.add(user);
    props.toggle();
  }

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleInitChange(event) {
    setInit(event.target.value);
  }

  return (

    <Container className="add-pane">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'player' })}
            onClick={() => { toggle('player');} }
          >
            Player
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'monster' })}
            onClick={() => { toggle('monster'); }}
          >
            Monster
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="player">
          <Row form={true}>
            <input type="text" placeholder="Name" onChange={handleNameChange}/>
          </Row>
          <Row form={true}>
            <input type="text" placeholder="Initiative" onChange={handleInitChange}/>
          </Row>
          <Row form={true}>
            <Col></Col>
            <Col>
              <img src={player} alt={"..."}></img>
            </Col>
            <Col></Col>
          </Row>
          <Row form={true}>
            <Col>
              <button className="button" onClick={() => handleSubmitPlayer("player")}>Submit</button>
            </Col>
            <Col></Col>
            <Col>
              <button className="button" onClick={props.toggle}>Cancel</button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="monster">
          <Row form={true}>
            <input type="text" placeholder="Name" onChange={handleNameChange} />
          </Row>
          <Row form={true}>
            <input type="text" placeholder="Initiative" onChange={handleInitChange} />
          </Row>
          <Row form={true}>
            <Col></Col>
            <Col>
              <img src={monster} alt={"..."}></img>
            </Col>
            <Col></Col>
          </Row>
          <Row form={true}>
            <Col>
              <button className="button" onClick={() => handleSubmitPlayer("monster")}>Submit</button>
            </Col>
            <Col></Col>
            <Col>
              <button className="button" onClick={props.toggle}>Cancel</button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}
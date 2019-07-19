import React, { Component } from 'react';
import { Container, Col, Row, TabPane, TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import classnames from 'classnames';
const axios = require('axios');


class AddPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'player',
      name:"",
      init:""
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleInitChange = this.handleInitChange.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSubmit(event) {
    let user = {
      name: this.state.name,
      init: this.state.init
    }

    axios.post('/api/add', user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleNameChange = event => {
    this.setState({name: event.target.value});
  }

  handleInitChange = event => {
    this.setState({init: event.target.value});
  }

  render() {
    
    return (

      <Container className="add-pane">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'player' })}
              onClick={() => { this.toggle('player'); }}
            >
              Player
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'monster' })}
              onClick={() => { this.toggle('monster'); }}
            >
              Monster
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="player">
            <Row form="true">
              <input type="text" placeholder="Name" onChange={this.handleNameChange}/>
            </Row>
            <Row form="true">
              <input type="text" placeholder="Initiative" onChange={this.handleInitChange}/>
            </Row>
            <Row form="true">
              <button onClick={this.handleSubmit}>Submit</button>
            </Row>
          </TabPane>
          <TabPane tabId="monster">
            <Row form="true">
              <input type="text" placeholder="Name"/>
            </Row>
            <Row form="true">
              <input type="text" placeholder="Initiative"/>
            </Row>
            <Row form="true">
              <button>Submit</button>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default AddPane;

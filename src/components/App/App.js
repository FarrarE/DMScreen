import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './App.css';

import HeaderPane from "./HeaderPane";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      list: [],
      currentPlayer: {}
    };
    this.populateList = this.populateList.bind(this);
  }

  populateList(event) {
    fetch(`/api/list`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {

    {this.populateList()}

    if (this.state.list[this.state.current] === undefined) return null;
    else
      {this.state.currentPlayer = this.state.list[this.state.current]}

    return (
  
      <Container className="app"> 
        <Row>
          <Col></Col>
          <Col>
            <Row className="Header">
              <HeaderPane />
            </Row>
            <Row className="Current">
              <CurrentPane currentPlayer={this.state.currentPlayer}/>
            </Row>
            <Row className="List">
              <ListPane list={this.state.list}/>
            </Row></Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default App;

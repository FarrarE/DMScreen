import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';



class CurrentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      current: "",
      list: []
    };
    this.getList = this.getList.bind(this);
  }

  getList(event) {
    fetch(`/api/list`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    {this.getList()}
    if (this.state.list[this.state.current] === undefined) return null;

    {var currentPlayer = this.state.list[this.state.current]}
    
    return (
  

      <Container className="current-pane">
        <Row> 
          <Col>
            Current: {this.state.current}
          </Col>
          <Col>        
            <Player name={currentPlayer.name} key={currentPlayer.key} type={currentPlayer.type} init={currentPlayer.init} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default CurrentPane;

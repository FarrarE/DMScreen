import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.css'

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
  return (
    <Container className="player-card">
      <Row>
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
        <Col className="close-col" md="3">
          <button onClick={this.handleRemove} className="close">X</button>
        </Col>
      </Row>
    </Container>
  )}
}

export default Player;
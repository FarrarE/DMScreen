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
        <Col></Col>
        <Col>
          {JSON.stringify(this.props.name)}
          {JSON.stringify(this.props.ukey)}
          {JSON.stringify(this.props.type)}
          {JSON.stringify(this.props.init)}
        </Col>
        <Col>
          <button onClick={this.handleRemove} className="close">X</button>
        </Col>
      </Row>
    </Container>
  )}
}

export default Player;
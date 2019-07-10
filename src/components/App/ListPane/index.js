import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';


class ListPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      list: []
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
    

    return (
        <Container className="list-pane">
          <Row>
            <Col></Col>
            <Col>
              {this.state.list.map(({name, key, type, init}) => <Player name={name} type={type} key={key} init={init}/>)}
            </Col>
            <Col></Col>
          </Row>
  
        </Container>
    );
  }
}

export default ListPane;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Header from "./Header";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";

function App() {
  return (
    <div className="App">
      <Container>

        <Row className="Header">
          <Col>
            <Header />
          </Col>
        </Row>
          
        <Row className="Current">
          <Col>
            <CurrentPane />
          </Col>
        </Row>

        <Row className="List">
          <Col>
            <ListPane/>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;

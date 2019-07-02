import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>

        <Row className="Header">
          <Col>Header</Col>
        </Row>
          
        <Row className="Body">
          <Col>Body</Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import './App.css';

import Header from "./Header";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";

function App() {
  return (
    <div className="App">
      <Container>
        
        <Row className="Header">
          <Col md={4}/>
          <Col md={4}>
            <Header />
          </Col>
          <Col md={4}/>
        </Row>
          
        <Row className="Current">
          <Col/>
          <Col>
            <CurrentPane />
          </Col>
          <Col/>
        </Row>

        <Row className="List">
          <Col/>
          <Col>
            <ListPane/>
          </Col>
          <Col/>
        </Row>

      </Container>
    </div>
  );
}

export default App;

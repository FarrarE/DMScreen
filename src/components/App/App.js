import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import './App.css';

import HeaderPane from "./HeaderPane";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";

function App() {
  return (

  <Container className="app">  
      <Row className="Header">
          <HeaderPane />
      </Row>
      <Row className="Current">
          <CurrentPane />
      </Row>
      <Row className="List">
          <ListPane/>
      </Row>
    </Container>
  );
}

export default App;

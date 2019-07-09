import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import './App.css';

import HeaderPane from "./HeaderPane";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";

function App() {
  return (
    <div className="App">
      <Container>
        
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
    </div>
  );
}

export default App;

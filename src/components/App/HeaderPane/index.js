import React, { UseState } from 'react';
import { Container, Row, Col} from 'reactstrap';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderPane = (props) => {

  return (
     <Container className="header-pane">
        <Row>
          <Col>
              <button type="submit">Prev</button>
              <button type="submit">Next</button>
          </Col>
          <Col>DMScreen</Col>
          <Col>
              <button type="submit">Sort</button>
              <button type="submit">Add</button>
          </Col>
        </Row>
      </Container>
  )
}

export default HeaderPane;

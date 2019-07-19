import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderPane = (props) => {
  return (
     <Container className="header-pane">
        <Row>
          <Col>
              <button onClick={props.previous} type="submit">Prev</button>
              <button onClick={props.next} type="submit">Next</button>
          </Col>
          <Col>DMScreen</Col>
          <Col>
              <button type="submit">Sort</button>
              <button onClick={props.add}>Add</button>
          </Col>
        </Row>
      </Container>
  )
}

export default HeaderPane;

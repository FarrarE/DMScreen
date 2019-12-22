import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderPane = (props) => {
  return (
     <Container className="header-pane">
        <Row>
          <Col xs={{ order: 2 }} md={{ size:4, order: 1 }}>
              <button className="button" onClick={props.load} type="submit">Load</button>
              <button className="button" onClick={props.save} type="submit">Save</button>
          </Col>
          <Col xs={{ order: 2 }} md={{ size:4, order: 1 }}><h1></h1>DMScreen</Col>
          <Col xs={{ order: 2 }} md={{ size:4, order: 1 }}> 
              <button className="button" onClick={props.sort} >Sort</button>
              <button className="button" onClick={props.add}>Add</button>
          </Col>
        </Row>
      </Container>
  )
}

export default HeaderPane;

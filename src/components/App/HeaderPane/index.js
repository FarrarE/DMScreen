import React, { UseState } from 'react';
import { Container, Row, Col} from 'reactstrap';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
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
    );
  }
}

export default HeaderPane;

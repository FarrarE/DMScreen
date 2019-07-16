import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



class AddPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  render() {
    
    return (
  

      <Container className="add-pane">
        <Row>
          <form>
            <input type="text" />
          </form>
        </Row>
          <form>
            <input type="text" />
          </form>}
        <Row>

        </Row>
        <Row>

        </Row>
      </Container>
    );
  }
}

export default AddPane;

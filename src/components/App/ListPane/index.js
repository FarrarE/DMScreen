import React, { Component } from 'react';
import { Container } from 'reactstrap';


class ListPane extends Component {
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
      <Container >
        <div className="App">
          <p>{JSON.stringify(this.state.list.list)}</p>
        </div>
      </Container>

    );
  }
}

export default ListPane;

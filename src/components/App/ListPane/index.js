import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';


class ListPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: '',
      list: [
        {name:"Test1"},
        {name:"Test2"},
        {name:"Test3"},
        {name:"Test4"},
      ]
    };
    this.populateList = this.populateList.bind(this);
  }

  populateList(event) {
    fetch(`/api/add`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    {this.populateList()}

    return (
      <Container >
        <div className="App">
          <p>{JSON.stringify(this.state.list)}</p>
        </div>
      </Container>

    );
  }
}

export default ListPane;

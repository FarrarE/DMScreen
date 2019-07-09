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
        <div className="App">
          {JSON.stringify(this.state.list.list)}
        </div>
    );
  }
}

export default ListPane;

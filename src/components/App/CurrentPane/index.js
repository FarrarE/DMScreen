import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';


class CurrentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: '',
      current: {name: "Current"}
    };
    this.populateCurrent = this.populateCurrent.bind(this);
  }

  populateCurrent(event) {
    fetch(`/api/add`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    {this.populateCurrent()}

    return (
      <div className="App">
        <p>{this.state.confirmation}</p>
        <p>{JSON.stringify(this.state.current)}</p>
      </div>
    );
  }
}

export default CurrentPane;

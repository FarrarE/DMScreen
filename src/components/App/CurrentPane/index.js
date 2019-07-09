import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';


class CurrentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
    };
    this.getList = this.getList.bind(this);
  }

  getList(event) {
    fetch(`/api/list`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }


  render() {
    {this.getList()}

    return (
      <div className="App">
        Current: {JSON.stringify(this.state.list.current)}
      </div>
    );
  }
}

export default CurrentPane;

import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './App.css';

import HeaderPane from "./HeaderPane";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";
import AddPane from './AddPane';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      list: [],
      currentPlayer: {},
      addPaneOpen: true
    };
    this.populateList = this.populateList.bind(this);
    this.previousPlayer = this.previousPlayer.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.toggleAddPane = this.toggleAddPane.bind(this);
  }

  previousPlayer(){

    if(this.state.current === 0){
      this.setState((state) => {
        return {current: state.list.length};
      });
    }

    this.setState((state) => {
      return {current: state.current - 1};
    });
  }

  nextPlayer(){

    if(this.state.current === this.state.list.length - 1){
      this.setState((state) => {
        return {current: -1};
      });
    }

    this.setState((state) => {
      return {current: state.current + 1};
    });
  }

  toggleAddPane(){
    this.setState((state) => {
      return {addPaneOpen: !state.addPaneOpen};
    });
  }

  populateList(event) {
    fetch(`/api/list`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

 
  render() {
    let addPane;

    this.populateList()

    if (this.state.list[this.state.current] === undefined) return null;
    else
      this.state.currentPlayer = this.state.list[this.state.current]

      if(this.state.addPaneOpen){
        addPane = <AddPane />
      }
    
    return (
  
      <Container className="app"> 
        {addPane}
        <Row className="Header">
          <HeaderPane previous={this.previousPlayer} next={this.nextPlayer} add={this.toggleAddPane} />
        </Row>
        <Row className="Current">
          <CurrentPane currentPlayer={this.state.currentPlayer}/>
        </Row>
        <Row className="List">
          <ListPane list={this.state.list}/>
        </Row>
      </Container>
    )
  }
}

export default App;

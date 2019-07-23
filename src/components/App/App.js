import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';
import './App.css';

import HeaderPane from "./HeaderPane";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";
import AddPane from './AddPane';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.populateList = this.populateList.bind(this);
    this.sortList = this.sortList.bind(this);
    this.previousPlayer = this.previousPlayer.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.toggleAddPane = this.toggleAddPane.bind(this);
    this.populateList();
    this.state = {
      current: 0,
      list: [],
      currentPlayer: {},
      addPaneOpen: false
    };
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

  populateList(event) {
    fetch(`/api/list`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  sortList(){
    let newList = this.state.list;
    newList.sort((a, b) => parseFloat(b.init) - parseFloat(a.init));

    this.setState((state) => {
      return {list: newList};
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


  addPaneCallback = (dataToAdd) => {

    this.setState(prevState => ({
      list: [...prevState.list, dataToAdd]
    }));

  }

  removeButtonCallback = (dataToRemove) =>{

    var newList = [...this.state.list];
    var index = newList.indexOf(dataToRemove.target.value)

    if (index !== -1) {
      newList.splice(index, 1);
      this.setState({list: newList});
    }
  }

  render() {
    let addPane;

    if (this.state.list[this.state.current] === undefined) return null;
    else
      this.state.currentPlayer = this.state.list[this.state.current]

    if(this.state.addPaneOpen){
      addPane = <AddPane add={this.addPaneCallback} toggle={this.toggleAddPane}/>
    }
    
    return (
  
      <Container className="app"> 
        {addPane}
        <Row className="Header">
          <HeaderPane previous={this.previousPlayer} next={this.nextPlayer} add={this.toggleAddPane} sort={this.sortList} />
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

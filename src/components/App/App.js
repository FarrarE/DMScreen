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
    this.saveList = this.saveList.bind(this);
    this.sortList = this.sortList.bind(this);
    this.previousPlayer = this.previousPlayer.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.toggleAddPane = this.toggleAddPane.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
    this.populateList();
    this.state = {
      current: 0,
      list: [],
      currentPlayer: {},
      addPaneOpen: false
    };
  }

  // Gets a list from the server api route and saves it to props list
  populateList(event) {
    fetch(`/api/list`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  saveList(){
    
    fetch('/api/save', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({list: this.state.list})
    }).then(res=>res.json())
      .then(res => console.log(res));
  }

  // Sorts the props list in descending order based on the init property
  sortList(){
    let newList = this.state.list;
    newList.sort((a, b) => parseFloat(b.init) - parseFloat(a.init));

    this.setState((state) => {
      return {list: newList};
    });
  }

  // Decrements current -1, changing what is displayed in the currentPane
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

  // Increments tcurrent +1, changing what is displayed in the currentPane
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

  // Shows or hides AddPane 
  toggleAddPane(){
    this.setState((state) => {
      return {addPaneOpen: !state.addPaneOpen};
    });
  }


  // Adds an object to props list
  addPane = (dataToAdd) => {

    this.setState(prevState => ({
      list: [...prevState.list, dataToAdd]
    }));

  }

  // This function will be called onClick
  // It will remove an item from the props list with a key value equal to dataToRemove
  removeButton = (dataToRemove) =>{

    let newList = this.state.list;
    let index = -1;

    for (var i=0; i < newList.length; i++) {
      if (newList[i].key === dataToRemove) {
          index = i;
      }
    } 
    
    if(index !== -1){
      newList.splice(index, 1);
      this.setState({list: newList});
    }

    if(this.state.list.length === 0)
    this.setState({currentPlayer: {}});
  }

  setCurrent = () =>{

    if (this.state.list[this.state.current] != undefined){
      this.state.currentPlayer = this.state.list[this.state.current]
    }
  }

  render() {

    let addPane;

    this.setCurrent();

    if(this.state.addPaneOpen){
      addPane = <AddPane add={this.addPane} toggle={this.toggleAddPane} length={this.state.list.length}/>
    }
    
    return (
  
      <Container className="app"> 
        {addPane}
        <Row className="Header">
          <HeaderPane 
            load={this.populateList}
            save={this.saveList}
            add={this.toggleAddPane} 
            sort={this.sortList} 
          />
        </Row>
        <Row className="Current">
          <CurrentPane 
            previous={this.previousPlayer} 
            next={this.nextPlayer} 
            remove={this.removeButton} 
            currentPlayer={this.state.currentPlayer}
          />
        </Row>
        <Row className="List">
          <ListPane 
            remove={this.removeButton} 
            list={this.state.list}
          />
        </Row>
      </Container>
    )
  }
}

export default App;

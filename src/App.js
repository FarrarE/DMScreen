import React, { useState, useEffect } from "react";
import { Container, Row} from 'reactstrap';
import './App.css';

import HeaderPane from "./components/HeaderPane";
import CurrentPane from "./components/CurrentPane";
import ListPane from "./components/ListPane";
import AddPane from './components/AddPane';

export default function App(){
  const [list, setList] = useState();
  const [current, setCurrent] = useState(0);
  const [addPaneOpen, setAddPaneOpen] = useState(false);

  useEffect(() => {

    if(!list){
      populateList();
    }

  }, [list]);

  // Gets a list from the server api route and saves it to props list
  function populateList(event) {

    setList(JSON.parse(localStorage.getItem("playerList")));
  }

  function saveList(){
    localStorage.setItem('playerList', JSON.stringify(list));
  }

  // Sorts the props list in descending order based on the init property
  function sortList(){

    let newList;

    if(!list)
      newList = [];
    else
      newList = [...list];

    newList.sort((a, b) => parseInt(b.init) - parseInt(a.init));
    setList(newList);
  }

  // Decrements current -1, changing what is displayed in the currentPane
  function previousPlayer(){
    if(current === 0){
      setCurrent(list.length - 1);
    }else
      setCurrent(current - 1);
  }

  // Increments tcurrent +1, changing what is displayed in the currentPane
  function nextPlayer(){

    if(current === list.length - 1){
      setCurrent(0);
    }else
      setCurrent(current + 1);
  }

  // Shows or hides AddPane 
  function toggleAddPane(){
    setAddPaneOpen(!addPaneOpen);
  }

  // Adds an object to props list
  function addNewPlayer(dataToAdd){
    let newList;

    if(!list)
      newList = [dataToAdd];
    else
      newList = [...list, dataToAdd];

    setList(newList);
  }

  // This function will be called onClick
  // It will remove an item from the props list with a key value equal to dataToRemove
  function removeButton(dataToRemove){
    let newList = [...list];
    let index = -1;
    for (var i=0; i < newList.length; i++) {
      if (newList[i].ukey === dataToRemove) {
          index = i;
      }
    } 
    
    if(index !== -1){
      newList.splice(index, 1);
      setList(newList);
    }

  }

  return (

    <Container className="app"> 
    {addPaneOpen && <AddPane add={addNewPlayer} toggle={toggleAddPane} />}
    <Row className="Header">
      <HeaderPane 
        load={populateList}
        save={saveList}
        add={toggleAddPane} 
        sort={sortList} 
      />
    </Row>
    <Row className="Current">
      <CurrentPane 
        previous={previousPlayer} 
        next={nextPlayer} 
        remove={removeButton} 
        currentPlayer={list && list[current]}
      />
    </Row>
    <Row className="List">
      <ListPane 
        remove={removeButton} 
        players={list && list}
      />
    </Row>
    </Container>
  )
}
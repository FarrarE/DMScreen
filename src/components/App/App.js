import React, { useState, useEffect } from "react";
import { Container, Row} from 'reactstrap';
import './App.css';

import HeaderPane from "./HeaderPane";
import CurrentPane from "./CurrentPane";
import ListPane from "./ListPane";
import AddPane from './AddPane';

function App(){
  const [current, setCurrent] = useState("");
  const [list, setList] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [addPaneOpen, setAddPaneOpen] = useState(false);

  useEffect(() => {

    if(!list){
      populateList();
    }

    if(!current && list){
      setCurrentPlayer(list[0]);
    }
  }, [list]);

  // Gets a list from the server api route and saves it to props list
  function populateList(event) {
    setList([
      {
        name:"test1",  
        key:"1", 
        ukey:"1" ,
        type:"monster",
        init:"5" 
      },
      {
        name:"test2",  
        key:"2", 
        ukey:"2" ,
        type:"player",
        init:"15" 
      }
    ]);
  }

  function saveList(){
    
  }

  // Sorts the props list in descending order based on the init property
  function sortList(){
    let newList = list;
    newList.sort((a, b) => parseFloat(b.init) - parseFloat(a.init));
    setList(newList);
  }

  // Decrements current -1, changing what is displayed in the currentPane
  function previousPlayer(){
    setCurrent(list.length - 1)
  }

  // Increments tcurrent +1, changing what is displayed in the currentPane
  function nextPlayer(){

    if(current === list.length - 1){
      setCurrent(-1);
    }

    setCurrent(current + 1);
  }

  // Shows or hides AddPane 
  function toggleAddPane(){
    setAddPaneOpen(!addPaneOpen);
  }


  // Adds an object to props list
  function addPane(dataToAdd){

    setList([...list, dataToAdd]);
  }

  // This function will be called onClick
  // It will remove an item from the props list with a key value equal to dataToRemove
  function removeButton(dataToRemove){

    let newList = list;
    let index = -1;

    for (var i=0; i < newList.length; i++) {
      if (newList[i].key === dataToRemove) {
          index = i;
      }
    } 
    
    if(index !== -1){
      newList.splice(index, 1);
      setList(newList);
    }

    if(list.length === 0)
      setCurrentPlayer({})
  }

  return (

    <Container className="app"> 
    {addPaneOpen && <AddPane />}
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
          currentPlayer={currentPlayer}
        />
      </Row>
      <Row className="List">
        <ListPane 
          remove={removeButton} 
          players={list}
        />
      </Row>
    </Container>
  )
}

export default App;

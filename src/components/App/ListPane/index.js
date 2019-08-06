import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';


const ListPane = (props) => {
  
  let list;
   
  if(props.list){
    list = props.list.map(({name, key, type, init}) => 
      <Player className="player" name={name}  key={key} ukey={key} type={type} init={init} remove={props.remove}/>
    )
  }
  return (
      <Container className="list-pane">
        {list}
      </Container>
  )
}

export default ListPane;

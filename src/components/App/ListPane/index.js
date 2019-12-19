import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';


const ListPane = (props) => {
   
  return (
      <Container className="list-pane">
        <Player className="player" name="test"  key="0" ukey="0" type="player" init="0" remove={props.remove}/>
      </Container>
  )
}

export default ListPane;

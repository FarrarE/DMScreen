import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';


const ListPane = (props) => {

  return (
      <Container className="list-pane">
        {props.list.map(({name, key, type, init}) => 
          <Player className="player" name={name} type={type} key={key} init={init}/>
        )}
      </Container>
  )
}

export default ListPane;

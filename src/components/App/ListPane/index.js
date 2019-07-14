import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';


const ListPane = (props) => {

  return (
    <div className="player-card">
      <Container className="list-pane">
        {props.list.map(({name, key, type, init}) => <Player name={name} type={type} key={key} init={init}/>)}
      </Container>
    </div>
  )
}

export default ListPane;

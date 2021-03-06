import React, { useState, useEffect } from "react";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';

function ListPane(props) {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    setPlayers(props.players);
  }, [props.players]);
  return (
    <Container className="list-pane">
      {players && players.map((player, index) => 
       <Player
        key={props.name + index}
        className="player "
        player={player}
        remove={props.remove} 
        onChange={props.onChange} />
      )}
    </Container>
  )
}

export default ListPane;

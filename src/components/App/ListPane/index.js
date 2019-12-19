import React, { useState, useEffect } from "react";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Player from '../Player';

function ListPane(props) {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
      loadPlayers();
  }, [props.players]);

  async function loadPlayers(){
    setPlayers(props.players);    
  }

  return (
    <Container className="list-pane">
      {players && players.map(player => <Player 
        className="player"
        player={player}
        remove={props.remove}/>
      )}
    </Container>
  )
}

export default ListPane;

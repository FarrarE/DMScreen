import React from 'react';
import './styles.css'

const Player = (props) => {

  return (
    <div className="player-card">
      {JSON.stringify(props.name)}
      {JSON.stringify(props.key)}
      {JSON.stringify(props.type)}
      {JSON.stringify(props.init)}
    </div>
  )
}

export default Player;
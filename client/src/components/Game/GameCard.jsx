import React from 'react';
import { useHistory } from 'react-router-dom';
import GameProgress from './GameProgress';

// Displays overview of game: title & progress for now
const GameCard = ({ game }) => {
  // navigates to the game detail page
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/game/${game.id}`);
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h2>{game.title}</h2>
      <GameProgress progress={game.progress} />
    </div>
  );
};

export default GameCard;
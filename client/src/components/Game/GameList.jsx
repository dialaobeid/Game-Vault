import React from 'react';
import GameCard from './GameCard';



// Displays list of game cards
const GameList = ({ games }) => {
  return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games, refetch }) => {
  return (
    <div>
      {games.map((game) => (
        <GameCard key={game._id} game={game} refetch={refetch} />
      ))}
    </div>
  );
};

export default GameList;
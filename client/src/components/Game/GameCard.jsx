import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME, REMOVE_GAME } from '../../utils/mutations';
import GameProgress from './GameProgress';
import GameDetail from './GameDetail';

const GameCard = ({ game, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [saveGame] = useMutation(SAVE_GAME);
  const [removeGame] = useMutation(REMOVE_GAME);

  const handleFormSubmit = async (gameData) => {
    try {
      await saveGame({ variables: { newGame: gameData } });
      setIsEditing(false);
      refetch(); // Refetch the user data to update the game library
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await removeGame({ variables: { gameId: game._id } });
      refetch(); // Refetch the user data to update the game library
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ cursor: 'pointer', border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      {isEditing ? (
        <GameDetail game={game} onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <h3>{game.name}</h3>
          <GameProgress progress={game.progress} />
          <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="btn btn-danger" onClick={handleRemoveClick}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
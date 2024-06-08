import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME, REMOVE_GAME } from '../../utils/mutations';
import GameProgress from './GameProgress';
import GameDetail from './GameDetail';

const GameCard = ({ game, refetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentGame, setCurrentGame] = useState(game);
  const [saveGame] = useMutation(SAVE_GAME);
  const [removeGame] = useMutation(REMOVE_GAME);

  const handleFormSubmit = async (updatedGame) => {
    try {
      await saveGame({ variables: { gameId: currentGame._id } });
      setCurrentGame(updatedGame);
      setIsEditing(false);
      refetch(); // Refetch data to update library
    } catch (e) {
      console.error('Error saving game:', e);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await removeGame({ variables: { gameId: currentGame._id } });
      refetch(); // Refetch data to update library
    } catch (e) {
      console.error('Error removing game:', e);
    }
  };

  // Defensive check to see if object is defined
  if (!currentGame || !currentGame.name) {
    return null;
  }

  return (
    <div style={{ cursor: 'pointer', border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      {isEditing ? (
        <GameDetail game={currentGame} onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <h3>{currentGame.name}</h3>
          <GameProgress progress={currentGame.progress} />
          <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="btn btn-primary btn-danger" onClick={handleRemoveClick}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME, REMOVE_GAME } from '../../utils/mutations';
import GameProgress from './GameProgress';
// import GameForm from './GameForm';

// allows users to edit/remove games from library
const GameCard = ({ game }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [saveGame] = useMutation(SAVE_GAME);
  const [removeGame] = useMutation(REMOVE_GAME);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = async (gameData) => {
    try {
      await saveGame({ variables: { newGame: gameData } });
      setIsEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await removeGame({ variables: { gameId: game._id } });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ cursor: 'pointer', border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
      {isEditing ? (
        <GameForm game={game} onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <h2>{game.name}</h2>
          <GameProgress progress={game.progress} />
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleRemoveClick}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default GameCard;
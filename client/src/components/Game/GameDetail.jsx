import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME } from '../../utils/mutations';
import GameProgress from './GameProgress';

const GameDetail = ({ game, onSubmit }) => {
  const [saveGame] = useMutation(SAVE_GAME);
  const [progress, setProgress] = useState(game.progress || 0);
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveGame({
        variables: {
          newGame: {
            // _id: game._id,
            name: game.name,
            description: game.description,
            platform: game.platform,
            releasedate: game.releasedate,
            Image: game.Image,
            progress: parseInt(progress, 10),
          },
        },
      });
      onSubmit();
    } catch (e) {
      console.error(e);
      setFormError('Failed to save game. Please check the input and try again.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="progress">Progress</label>
        <input
          type="number"
          className="form-control"
          id="progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          min="0"
          max="100"
          required
        />
        <GameProgress progress={progress} />
      </div>
      {formError && <p className="text-danger">{formError}</p>}
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default GameDetail;
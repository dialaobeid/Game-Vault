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
      const { data } = await saveGame({
        variables: {
          newGame: {
            _id: game._id,
            name: game.name,
            description: game.description,
            platform: game.platform,
            releasedate: game.releasedate,
            Image: game.Image,
            progress: progress.toString(),
            // I can change this section to:
            // newGame: {
            //   _id: game._id,
            //   progress: progress.toString(),
            // },
          },
        },
      });
      onSubmit({ ...game, progress: progress.toString() });
    } catch (e) {
      console.error('Failed to save game:', e);
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
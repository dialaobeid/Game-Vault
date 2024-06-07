import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME } from '../../utils/mutations';

const GameSearch = () => {
  const [gameName, setGameName] = useState('');
  const [saveGame] = useMutation(SAVE_GAME);

  const handleChange = (e) => {
    setGameName(e.target.value);
  };

  const handleAddGame = async (e) => {
    e.preventDefault();
    try {
      await saveGame({
        variables: {
          newGame: {
            name: gameName,
            description: '',
            platform: '',
            releaseDate: '',
          },
        },
      });
      alert('Game added to your library!');
      setGameName(''); // Reset form field
    } catch (e) {
      console.error(e);
      alert('Failed to add game.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleAddGame}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          value={gameName}
          onChange={handleChange}
          placeholder="Game Name"
          required
        />
        <button type="submit" className="btn btn-primary btn-block">Search</button>
      </form>
    </div>
  );
};

export default GameSearch;
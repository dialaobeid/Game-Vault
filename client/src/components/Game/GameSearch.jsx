// client/src/components/GameSearch.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME } from '../../utils/mutations';
import { searchVideoGames } from '../../utils/API';

const GameSearch = () => {
  const [gameName, setGameName] = useState('');
  const [games, setGames] = useState([]);
  const [saveGame] = useMutation(SAVE_GAME);

  const handleChange = (e) => {
    setGameName(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await searchVideoGames(gameName);
      setGames(data.results);
    } catch (error) {
      console.error('Error searching games:', error);
    }
  };

  const handleAddGame = async (game) => {
    try {
      await saveGame({
        variables: {
          newGame: {
            name: game.name,
            description: game.description || '',
            platform: game.platforms?.map((p) => p.platform.name).join(', ') || '',
            releasedate: game.released || '',
            Image: game.background_image || '',
          },
        },
      });
      alert('Game added to your library!');
      setGameName(''); // Reset form field
      setGames([]); // Clear search results
    } catch (e) {
      console.error(e);
      alert('Failed to add game.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSearch}>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          value={gameName}
          onChange={handleChange}
          placeholder="Search for games..."
          required
        />
        <button type="submit" className="btn btn-primary btn-block">Search</button>
      </form>

      {games.length > 0 && (
        <div className="mt-4">
          <h2>Search Results</h2>
          <ul className="list-group">
            {games.map((game) => (
              <li key={game.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{game.name}</h5>
                    <p>{game.released}</p>
                    <img src={game.background_image} className='w-50 p-3' alt="Art of game" />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddGame(game)}
                  >
                    Add to Library
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameSearch;
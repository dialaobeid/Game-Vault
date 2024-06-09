import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GAME } from '../../utils/mutations';
import { searchVideoGames } from '../../utils/API';

// allows users to search for games then add to library
const GameSearch = ({ refetch }) => {
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
            progress: '0',
          },
        },
      });
      alert('Game added to your library!');
      setGameName(''); // Reset form field
      refetch(); // refetch saved games to update library
    } catch (e) {
      console.error('Failed to add game.', error);
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
        <div className="search-results mt-4">
          <h4>Search Results</h4>
          <ul className="list-group">
            {games.map((game) => (
              <li key={game.id} className="search-result-item list-group-item">
                <div className="search-result-title">{game.name}</div>
                <div className="search-result-date">{game.released}</div>
                <img src={game.background_image} className='w-50 p-3' alt="Art of game" />
                <button
                  className="add-to-library-button"
                  onClick={() => handleAddGame(game)}
                >
                  Add to Library
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameSearch;

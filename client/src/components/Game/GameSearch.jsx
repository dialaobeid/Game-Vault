import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { SEARCH_GAMES } from '../../utils/queries';
import { SAVE_GAME } from '../../utils/mutations';

// allows users to add games to library
const GameSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchGames, { loading, data }] = useLazyQuery(SEARCH_GAMES);
  const [saveGame] = useMutation(SAVE_GAME);

  const handleSearch = (e) => {
    e.preventDefault();
    searchGames({ variables: { searchTerm } });
  };

  const handleAddGame = async (game) => {
    try {
      await saveGame({ variables: { newGame: game } });
      alert('Game added to your library!');
    } catch (e) {
      console.error(e);
      alert('Failed to add game.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for games..."
          style={{ width: '100%', padding: '10px', margin: '20px 0' }}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.searchGames.map((game) => (
            <li key={game.id}>
              {game.title}
              <button onClick={() => handleAddGame(game)}>Add Game</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameSearch;
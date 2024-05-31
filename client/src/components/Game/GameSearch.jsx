import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { SEARCH_GAMES } from '../../utils/queries';
import { ADD_GAME_TO_LIBRARY } from '../../utils/mutations';

// lets users add games to library
const GameSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchGames, { loading, data }] = useLazyQuery(SEARCH_GAMES);
  const [addGameToLibrary] = useMutation(ADD_GAME_TO_LIBRARY);

  const handleSearch = (e) => {
    e.preventDefault();
    searchGames({ variables: { searchTerm } });
  };

  const handleAddGame = async (gameId) => {
    try {
      await addGameToLibrary({ variables: { gameId } });
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
              <button onClick={() => handleAddGame(game.id)}>Add to Library</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameSearch;
import React from 'react';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';
import GameList from '../components/Game/GameList';

const Library = () => {
  const games = [
    // Sample data; replace with actual data
    { id: 1, title: 'Game 1', description: 'Description 1' },
    { id: 2, title: 'Game 2', description: 'Description 2' },
  ];

  return (
    <div>
      <main>
        <h1>Game Library</h1>
        <GameList games={games} />
      </main>
    </div>
  );
};

export default Library;
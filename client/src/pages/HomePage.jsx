import React from 'react';
import GameSearch from '../components/Game/GameSearch';

const HomePage = () => {
  return (
    <div>
      <main>
        <h1>Welcome to Player Archive</h1>
        <p>Your ultimate gaming companion.</p>
        <GameSearch />
      </main>
    </div>
  );
};

export default HomePage;
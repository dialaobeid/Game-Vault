import React from 'react';
import GameSearch from '../components/Game/GameSearch';

const HomePage = ({ refetch }) => {
  return (
    <div className="container mt-5">
      <main className="d-flex flex-column align-items-center">
        <h1>Welcome to Player Archive</h1>
        <p className="custom-p">Your ultimate gaming companion</p>
        <GameSearch refetch={refetch} />
      </main>
    </div>
  );
};

export default HomePage;
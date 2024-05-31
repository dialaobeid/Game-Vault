import React from 'react';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';
import GameSearch from '../components/Game/GameSearch';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Player Archive</h1>
        <p>Your ultimate gaming companion.</p>
        <GameSearch />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
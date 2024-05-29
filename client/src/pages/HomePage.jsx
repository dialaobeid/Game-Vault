import React from 'react';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Player Archive</h1>
        <p>Your ultimate gaming library</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
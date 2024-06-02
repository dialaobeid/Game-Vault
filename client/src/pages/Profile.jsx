import React from 'react';
import { useQuery } from '@apollo/client';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';
import { GET_USER_INFO } from '../utils/queries';
import GameList from '../components/Game/GameList';
import GameForm from '../components/Game/GameForm';

// displays user info and game library
const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { username, email, games } = data.user;

  return (
    <div>
      <Header />
      <main>
        <h1>User Profile</h1>
        <div>
          <h2>Username: {username}</h2>
          <h3>Email: {email}</h3>
        </div>
        <h2>Your Game Library</h2>
        {games.length > 0 ? <GameList games={games} /> : <p>No games added yet.</p>}
        <h2>Add or Edit Game</h2>
        <GameForm onSubmit={() => window.location.reload()} />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
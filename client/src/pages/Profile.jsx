import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import GameList from '../components/Game/GameList';

const Profile = () => {
  const { loading, error, data, refetch } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { username, savedGames } = data.me;

  return (
    <div className='profile'>
      <main>
        <h2>User Profile</h2>
        <div>
          <h3>Username: {username}</h3>
        </div>
        <h2>Your Game Library</h2>
        {savedGames.length > 0 ? (
          <GameList games={savedGames} refetch={refetch} />
        ) : (
          <p>No games added yet</p>
        )}
      </main>
    </div>
  );
};

export default Profile;
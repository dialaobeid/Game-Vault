import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GameProgress from './GameProgress';
import ReviewList from '../Review/ReviewList';
import { GET_GAMES } from '../../utils/queries';

// displays detailed game info
const GameDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_GAMES, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const game = data.game;

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <GameProgress progress={game.progress} />
      <ReviewList reviews={game.reviews} />
    </div>
  );
};

export default GameDetail;
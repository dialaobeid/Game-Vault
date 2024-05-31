import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GameProgress from './GameProgress';
import ReviewList from '../Review/ReviewList';

import { GET_GAME } from '../../utils/queries';

// Displays game info in detail (description, progress & reviews)
const GameDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_GAME, {
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
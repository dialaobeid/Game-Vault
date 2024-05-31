import React from 'react';

// Displays user's game progress in %
const GameProgress = ({ progress }) => {
  return (
    <div>
      <h3>Game Progress: {progress}%</h3>
      <progress value={progress} max="100"></progress>
    </div>
  );
};

export default GameProgress;
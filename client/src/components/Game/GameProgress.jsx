import React from 'react';

const GameProgress = ({ progress = 0 }) => {
  const getProgressColor = (progress) => {
    if (progress < 50) return 'red';
    if (progress < 75) return 'yellow';
    return 'green';
  };

  return (
    <div className="progress-container">
      <h6>Game Progress: {progress}%</h6>
      <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: getProgressColor(progress) }}></div>
    </div>
  );
};

export default GameProgress;
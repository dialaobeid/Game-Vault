// Displays user's game progress in %
// const GameProgress = ({ progress }) => {
//   return (
//     <div>
//       <h3>Game Progress: {progress}%</h3>
//       <progress value={progress} max="100"></progress>
//     </div>
//   );

import React from 'react';
import { Box, Text, Progress } from '@chakra-ui/react';

const GameProgress = ({ progress = 0 }) => {
  const getProgressColor = (progress) => {
    if (progress < 50) return 'red';
    if (progress < 75) return 'yellow';
    return 'green';
  };

  return (
    <Box width="full">
      <Text mb="2" color="white">Progress: {progress}%</Text>
      <Progress
        value={progress}
        colorScheme={getProgressColor(progress)}
        size="lg"
        hasStripe
        isAnimated
      />
    </Box>
  );
};

export default GameProgress;
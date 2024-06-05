import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import GameSearch from '../components/Game/GameSearch';

const HomePage = () => {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h1">Welcome to Player Archive</Heading>
      <Text>Your ultimate gaming companion.</Text>
      <GameSearch />
    </Box>
  );
};

export default HomePage;
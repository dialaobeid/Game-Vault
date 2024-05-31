import { gql } from '@apollo/client';

export const ADD_GAME_TO_LIBRARY = gql`
  mutation addGameToLibrary($gameId: ID!) {
    addGameToLibrary(gameId: $gameId) {
      id
      title
      progress
    }
  }
`;

// add more
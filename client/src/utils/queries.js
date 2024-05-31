import { gql } from '@apollo/client';

// fetches list of all games > GameList
export const GET_GAMES = gql`
  query getGames {
    games {
      _id
      title
      description
      progress
      reviews {
        _id
        content
        user
      }
    }
  }
`;

// fetches a single game by ID > GameDetail
export const GET_GAME = gql`
  query getGame($id: ID!) {
    game(id: $id) {
      _id
      title
      description
      progress
      reviews {
        _id
        content
        user
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      games {
        _id
        title
        progress
      }
    }
  }
`;
import { gql } from '@apollo/client';

export const GET_ME = gql `
query Me {
  me {
    username
    savedGames {
      name
      platform
      description
      _id
    }
  }
}
`;

export const GET_USER = gql`
query User($username: String) {
  user(username: $username) {
    username
    savedGames {
      platform
      name
      description
      Image
      releasedate
    }
  }
}
`;

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
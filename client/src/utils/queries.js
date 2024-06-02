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
`


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
// export const GET_GAME = gql`
//   query getGame($id: ID!) {
//     game(id: $id) {
//       _id
//       title
//       description
//       progress
//       reviews {
//         _id
//         content
//         user
//       }
//     }
//   }
// `;

// export const SEARCH_GAMES = gql`
//   query searchGames($searchTerm: String!) {
//     searchGames(searchTerm: $searchTerm) {
//       id
//       title
//     }
//   }
// `;

// Other queries...

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
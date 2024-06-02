import { gql } from '@apollo/client';

// export const ADD_GAME_TO_LIBRARY = gql`
//   mutation addGameToLibrary($gameId: ID!) {
//     addGameToLibrary(gameId: $gameId) {
//       id
//       title
//       progress
//     }
//   }
// `;

export const LOGIN = gql `
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      username
    }
    token
  }
}
`

export const SINGUP = gql  `
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`

export const SAVE_GAME = gql `
mutation SaveGame($newGame: GameInput) {
  saveGame(newGame: $newGame) {
    savedGames {
      name
      description
      platform
      Image
      releasedate
    }
  }
}
`

export const REVOMVE_GAME = gql `
mutation RemoveGame($gameId: ID!) {
  removeGame(gameId: $gameId) {
    savedGames {
      name
    }
  }
}
`


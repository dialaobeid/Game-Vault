const typeDefs = `
type User {
    _id: ID
    firstname: String
    Lastname: String
    email: String
    username: String 
    password: String
    games: [Game]
}

type Auth {
    token: ID!
    user: User
  }

type Game {
    _id: ID
    name: String
    description: String
    Image: String
    platform: String
    releasedate: String  
}



input GameInput {
    name: String
    description: String
    Image: String
    platform: String
    releasedate: String      
}

type Query {
users: [User]
user(username: String): User
me: User
}

type Mutation {
addUser(username: String!, email: String!, password: String!): Auth
login(username: String!, password: String!): Auth
saveGame(newGame: GameInput): User
removeGame(gameId: ID!): User
}
`
module.exports = typeDefs
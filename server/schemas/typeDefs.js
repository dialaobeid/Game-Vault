const typeDefs = `
type User {
    _id: ID
    firstname: String
    Lastname: String
    email: String
    username: String (add this)
    password: String
    orders: [order] (Games?)
    games: [Game]
}

type Game {
    _id: ID
    name: String
    description: String
    Image: String
    platform: String
    library: [libraries]
    releasedate: String (do we want this?)  
}

type Query {

}

type Mutation {

}
`
module.exports = typeDefs
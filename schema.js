const { buildSchema } = require ('graphql');

// Construct a schema, using GraphQL schema language
// el ! significa obligatorio
const schema = buildSchema(`
  type Query {
    hello: String
    address: String
    random: Float!
    rollThreeDice: [Int]
    greet(name: String) : String
    tasks: [Task]
  }

  type Task {
    _id: ID
    title: String!
    description: String
    number: Int
  }
`);

module.exports = schema;
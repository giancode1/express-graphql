const express = require('express');
const { graphqlHTTP } = require ('express-graphql');
const schema = require('./schema');

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!👋 ';
  },
  address: () => {
    return 'My address GC!';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
  greet: ({name}) => {
    console.log(name);
    return `Hello ${name}`;
  },
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');


/*consulta en: http://localhost:4000/graphql

{
  greet(name: "Gian")
  random
  hello
  rollThreeDice
}

*/
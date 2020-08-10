const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// or const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const app = express();
const PORT = 8000;
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Hello World",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World",
      },
    }),
  }),
});
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

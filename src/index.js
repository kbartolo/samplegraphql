import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

import typeDefs from "./types/guides/index";
import rootValue from "./resolvers/index";

const schema = buildSchema(typeDefs);

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(3500);

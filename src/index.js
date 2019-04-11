import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express"; // Integrating Graphql with Express
//import models from "./models"; // MongoDb Models
import Guide from "./models/guide";
import typeDefs from "./types/guides";
import resolvers from "./resolvers/guides";

const app = express();

mongoose
  .connect("mongodb://localhost/graphql-mongo", { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

// settings
app.set("port", process.env.PORT || 4000);

//typedefs: equivalent to propertyes
//resolvers: equivalent to methods
const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Guide
  },
  introspection: true,
  playground: true,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      "editor.theme": "dark"
    }
  }
});

SERVER.applyMiddleware({
  app
});

// start the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

/* const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  "/graphql",
  express.json(),
  graphqlExpress({
    schema,
    context: {
      Client
    }
  })
);

// start the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
 */

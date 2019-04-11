export default `
  type Client {
    _id: String!
    name: String!
  }
  type Query {
    allClients: [Client!]!
  }
  type Mutation {
    createClient(name: String!): Client!
  }
`;

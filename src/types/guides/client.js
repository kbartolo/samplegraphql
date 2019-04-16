export default `
  type Client {
    id: ID!
    name: String!
    opportunity: Opportunity!
    guide: GuideClient!
  } 

  type Query{
    allClients: [Client]!
  }

`;

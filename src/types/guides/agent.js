export default `
    type Agent {
    id: ID!
    name: String!
    clients: [Client!]!
    lastModifiedDate: String!
    lastUpdatedBy: Agent!
    }
`;

export default `
  type Introduction {
    id: ID!
    title: String!
    message: String!
    videoUrl: String!
    ctaText: String!
    createdAt: String!
    lastModifiedDate: String!
    lastUpdatedBy: Agent!
  }

  type Query{
    introductionFromGuide() : [Introduction!]!
  }
`;

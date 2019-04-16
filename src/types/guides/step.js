export default `
    type Step {
        id: ID!
        guide: Guide!
        order: Int!
        image: String!
        title: String!
        description: String!
        ctaText: String!
        ctaValue: String!
        createdAt: String!
        lastModifiedDate: String!
        lastUpdatedBy: Agent!
        #owners?
    }

    type Query{
      allStepsFromGuide() : [Step!]!
    }
`;

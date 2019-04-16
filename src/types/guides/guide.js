export default `
  type Guide {
    id: ID!
    name: String!
    owner: Agent!
    isDefault: Boolean!
    type(type: Type): String!
    steps: [Step!]!
    introduction: Introduction!
    createdAt: String!
    lastModifiedDate: String!
    lastUpdatedBy: Agent!
  }

  type Query{
    allGuides(type:GuideType) : [Guide!]!
  }

`;

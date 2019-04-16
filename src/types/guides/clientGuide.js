export default `
  type ClientGuide {
    id: ID!
    
    name: String!
    owner: Agent!
    isDefault: Boolean!
    type(type: Type): String!
    steps: [Step!]!
    introduction: Introduction!
  
    originalAgent: Agent!
    currentAgent: Agent!
    consumer: [Client]
    currentStep: Step! 
    isCompleted: Boolean
    createdAt: String!
    lastModifiedDate: String!
    lastUpdadedBy: Agent!
    completedDate: String
  }
`;

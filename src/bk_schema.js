const { gql } = require('apollo-server');
const typeDefs = gql`
type Query {
    # ID is not necesarry (Sessions with GraphQL)
    allGuides(type:GuideType) : [Guide!]!  #Pagination  
    allClients(): [Client]  #Pagination and Ordering  
    introductionFromGuide(): Introduction!
    allStepsFromGuide(): [Step!]!
  }

enum GuideType {
  ALL,
  DEFAULT,
  CUSTOM
}


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

type Agent {
  id: ID!
  name: String!
  clients: [Client!]!
  lastModifiedDate: String!
  lastUpdatedBy: Agent!
}




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

#-
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

type Client {
  id: ID!
  name: String!
  opportunity: Opportunity!
  guide: GuideClient!
}


# type CurrentStep {
#   step: Step!
#   lastModifiedDate: String!
#   lastUpdadedBy: Agent!
# }

# type Client {
#       id: ID!
#   name: String!
#   opportunity: Opportunity!
#   buyGuideCurrentStep: CurrentStep!
#   sellGuideCurrentStep: CurrentStep!
# }

type Opportunity {
  id: ID!
  name: String!
  url: String!
}

type Mutation{
  createGuide(
    name: String!
    owner: Agent!
    type(type: Type): String!
    steps: [Step!]!
    introduction: Introduction!
    createdAt: String!
    lastModifiedDate: String!
    lastUpdatedBy: Agent!
    updatedAt: String!): Guide!

  modifyGuide(
    name: String!
    steps: [Step!]!
    introduction: Introduction!
    lastModifiedDate: String!
    lastUpdatedBy: Agent!
    completedDate: String): Guide!
 
  assignContact(
    guide: Guide!
    client: Client!
    owner: Agent!): InstanceGuide 
  }
`
module.exports = typeDefs;


export default `
  type Guide{
    _id: String!
    id: String!
    guide_temp_type: String!
    guide_temp_name: String!
    guide_temp_owner: String!
    guide_total_num_steps: String!
    guide_total_num_clients: String!
    guide_templete: String!
    created_at: String!
    updated_at: String!
  }
  type Query{
    allGuides: [Guide!]!
  }
  type Mutation{
    createGuide(
      id: String!,
      guide_temp_type: String!,
      guide_temp_name: String!,
      guide_temp_owner: String!,
      guide_total_num_steps: String!,
      guide_total_num_clients: String!,
      guide_templete: String!,
      created_at: String!,
      updated_at: String!): Guide!
  }
`;

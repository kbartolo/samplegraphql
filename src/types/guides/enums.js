const { gql } = require("apollo-server");

module.exports = gql`
  enum GuideType {
    ALL
    DEFAULT
    CUSTOM
  }
`;

import { gql } from 'apollo-server-express';

export default gql`
  # ---------------------------
  # Extend : Query
  # ---------------------------
  extend type Query {
    personListFilter(
      username: String
      employer: String
      role: String
    ): [Person!]
    personList: [Person!]
    person(id: ID!): Person
  }

  # ---------------------------
  # Person : Level 1
  # ---------------------------
  type Person {
    id: ID!
    username: String!
    accounts: [Account]
    name: Name
    contact: Contact
    job: Job
    location: Location
  }

  # ---------------------------
  # Account : Person : Level 2
  # ---------------------------
  type Account {
    platform: String
    username: String
  }

  # ---------------------------
  # Name : Person : Level 2
  # ---------------------------
  type Name {
    nameDisplay: String
    nameFirst: String
    nameLast: String
  }

  # ---------------------------
  # Contact : Person : Level 2
  # ---------------------------
  type Contact {
    email: String
    phone: String
  }

  # ---------------------------
  # Job : Person : Level 2
  # ---------------------------
  type Job {
    employer: String
    role: String
  }

  # ---------------------------
  # Location : Person : Level 2
  # ---------------------------
  type Location {
    city: String
    state: String
  }

  # ---------------------------
  # Extend : Mutation
  # ---------------------------
  extend type Mutation {
    createPerson(username: String!): Person!

    updatePerson(username: String!): Person!
    deletePerson(id: ID!): Boolean!
  }
`;

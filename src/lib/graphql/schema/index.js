import { gql } from 'apollo-server-express';

import userSchema from './user';
import personSchema from './person';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, personSchema];

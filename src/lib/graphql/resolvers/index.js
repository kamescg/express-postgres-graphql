import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import personResolvers from './person';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, userResolvers, personResolvers];

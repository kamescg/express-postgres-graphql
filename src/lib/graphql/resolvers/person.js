/* --- Global --- */
import { combineResolvers } from 'graphql-resolvers';
/* --- Local --- */
import { isServerAuthenticated } from './authorization';

/* --- Person : Resolver --- */
export default {
  // @dev Generate the Person Queries
  Query: {
    personListFilter: async (parent, args, { models }) => {
      return await await models.Person.findAll({
        where: {
          job: {
            employer: args.employer,
          },
        },
      });
    },
    personList: async (parent, args, { models }) => {
      return await await models.Person.findAll();
    },
    person: async (parent, { id }, { models }) => {
      return await models.Person.findById(id);
    },
  },

  // @dev Generate the Person Mutations
  Mutation: {
    createPerson: async (
      parent,
      { username },
      { models, secret }
    ) => {
      const person = await models.Person.create({
        username,
        email,
        password,
      });

      return { person: person };
    },

    updateUser: combineResolvers(
      isServerAuthenticated,
      async (parent, { username }, { models, me }) => {
        const user = await models.Person.findById(me.id);
        return await user.update({ username });
      }
    ),

    deleteUser: combineResolvers(
      isServerAuthenticated,
      async (parent, { id }, { models }) => {
        return await models.Person.destroy({
          where: { id },
        });
      }
    ),
  },
};

import { GraphQLClient } from 'graphql-request';

export const gcmsClient = new GraphQLClient(process.env.GCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GCMS_TOKEN}`,
  },
});

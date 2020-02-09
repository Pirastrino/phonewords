import Express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import { resolvers } from './resolvers';

const main = async () => {
  const typeDefs = gql`
    type Query {
      words(group: [String]): [Word!]
    }

    type Word {
      lemma: String
    }
  `;

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const app = Express();
  server.applyMiddleware({ app });
  app.listen(3000, () => {
    console.log('🚀  Server ready at http://localhost:3000/graphql');
  });
};

main();
// import { words } from './data/words';

// const regex = new RegExp('^[are]');
// console.log(words.get(3)?.filter(w => w.match(regex)));

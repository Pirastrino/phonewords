import Express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import { resolvers } from './resolvers';

const main = async () => {
  const typeDefs = gql`
    type Query {
      words(base: String): [Word!]
      emojis: [Emoji!]
    }

    type Word {
      lemma: String
    }

    type Emoji {
      slug: String
      character: String
      unicodeName: String
      codePoint: String
      group: String
      subGroup: String
      variants: [emojiVariant!]
    }

    type emojiVariant {
      slug: String
      character: String
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

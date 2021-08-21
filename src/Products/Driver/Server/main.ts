/**
 * Express
 */
import express from 'express';

/**
 * Next
 */
import next from 'next';

/**
 * Lib
 */
import 'reflect-metadata';
import compression from 'compression';
import { buildSchema } from 'type-graphql';

/**
 * Server
 */
const port = parseInt(process.env.PORT ?? '3000', 10);
const app = next({ dev: process.env.NODE_ENV === 'development' });
const handle = app.getRequestHandler();

import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

async function bootstrap() {
  await app.prepare();

  const server = express();
  server.use(compression());

  // const schema = await buildSchema({
  //   resolvers: [memberList],
  //   emitSchemaFile: true,
  // });

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: server });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`GraphQL API @ http://localhost:${port}${apolloServer.graphqlPath}`);
  });
}

bootstrap();

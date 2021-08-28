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

/**
 * Apollo
 */
import { ApolloServer } from 'apollo-server-express';

/**
 * Schema
 */
import schema from '@/Products/Driver/Server/schema';

/**
 * Server
 */
async function bootstrap() {
  const port = parseInt(process.env.PORT ?? '3000', 10);
  const app = next({ dev: process.env.NODE_ENV === 'development' });
  const handle = app.getRequestHandler();

  await app.prepare();

  const server = express();
  server.use(compression());

  const apolloServer = new ApolloServer({ schema: await schema });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: server });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`GraphQL API @ ${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}${apolloServer.graphqlPath}`);
  });
}

bootstrap();

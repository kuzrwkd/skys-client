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
import { buildSchema, ObjectType, Field, Resolver, Query, Int } from 'type-graphql';

/**
 * Server
 */
const port = parseInt(process.env.PORT ?? '3000', 10);
const app = next({ dev: process.env.NODE_ENV === 'development' });
const handle = app.getRequestHandler();

import { ApolloServer } from 'apollo-server-express';

@ObjectType()
class Organization {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  name!: string | null;
}

@ObjectType()
class Contents {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  name!: string | null;
}

@ObjectType()
class NewsFeed {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  url!: string;

  @Field(() => Organization)
  organization!: NewsFeed.Organization;

  @Field(() => Contents)
  contents!: NewsFeed.Contents;

  @Field(() => String)
  articleCreatedAt!: string;

  @Field(() => String)
  articleUpdatedAt!: string;
}

@Resolver(NewsFeed)
class NewsFeedResolver {
  @Query(() => [NewsFeed])
  newsfeed() {
    return [
      {
        id: 1,
        title: '景気先行き巡り見方対立　株・商品強気、金利は慎重',
        url: 'https://www.nikkei.com/article/DGXZQOUB2417Y0U1A720C2000000/',
        organization: {
          id: 1,
          name: '日本経済新聞',
        },
        contents: {
          id: 1,
          name: 'Text',
        },
        articleCreatedAt: '2021-07-25T03:00:00.000Z',
        articleUpdatedAt: '',
      },
    ];
  }
}

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!';
  }
}

async function bootstrap() {
  await app.prepare();

  const server = express();
  server.use(compression());

  const schema = await buildSchema({
    resolvers: [NewsFeedResolver, HelloResolver],
    emitSchemaFile: true,
  });

  const apolloServer = new ApolloServer({ schema });
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

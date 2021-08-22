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
  type Organization {
    id: Int
    name: String
  }

  type Contents {
    id: Int
    name: String
  }

  type NewsFeed {
    id: Int
    title: String
    url: String
    organization: Organization
    contents: Contents
    articleCreatedAt: String
    articleUpdatedAt: String
  }

  type Query {
    hello: String
    newsfeed: [NewsFeed]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    newsfeed: () => [
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
      {
        id: 2,
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
    ],
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
    console.log(`GraphQL API @ ${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}${apolloServer.graphqlPath}`);
  });
}

bootstrap();

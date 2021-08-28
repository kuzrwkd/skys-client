/**
 * Lib
 */
import { buildSchema } from 'type-graphql';

/**
 * Resolver
 */
import { NewsFeedResolver } from '@/Products/Driver/Server/Resolver/NewsFeedResolver';
import { HelloResolver } from '@/Products/Driver/Server/Resolver/HelloResolver';

const schema = buildSchema({
  resolvers: [NewsFeedResolver, HelloResolver],
  emitSchemaFile: true,
});

export default schema;

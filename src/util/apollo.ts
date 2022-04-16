import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: `${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;

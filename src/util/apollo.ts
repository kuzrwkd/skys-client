import { ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: `${process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;

import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const {
  REACT_APP_API_ADRESS = '',
  REACT_APP_API_SECRET = ''
} = process.env || {};

const apiAddress = createHttpLink({
  uri: REACT_APP_API_ADRESS,
});

const authHeaders = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'x-hasura-admin-secret': REACT_APP_API_SECRET
  }
}));

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authHeaders.concat(apiAddress),
  queryDeduplication: true,
  ssrMode: true,
  headers: {

  }
});

export default client;

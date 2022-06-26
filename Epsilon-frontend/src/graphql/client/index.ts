import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'


import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import gql from 'graphql-tag';
import Config from '../../config'



//Pasar a variable de entorno
const httpLink = new HttpLink({ uri: Config.url.https });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:  new HttpLink({ 
    uri: 'http://localhost:4000/graphql' 
  })
});

export default client;
import { ApolloServer } from 'apollo-server-express';
import { ENV } from '../config/environment';
import schema from './schema';

const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,  // see below for more about this
  cache: "bounded",
  cors: {
    origin: ["https://localhost:3000", "https://localhost:4000/graphql"],
    credentials: true
  },
  playground: ENV.development,
});

export default apolloServer;
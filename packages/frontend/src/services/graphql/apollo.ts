import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as process from "process";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.DEVELOPMENT_STRAPI_URI,
  cache: new InMemoryCache(),
  headers: { authorization: `Bearer ${process.env.API_TOKEN}` },
});

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return createApolloClient;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = createApolloClient;
  }

  return apolloClient;
}

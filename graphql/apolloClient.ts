import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clam1xlxt2g3601ta2sopdqsf/master",
  cache: new InMemoryCache(),
});

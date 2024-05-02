import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers";
import SpotifyAPI from "./Datasources/spotify-api"
const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs, resolvers, dataSources: () => ({
      spotifyAPI: new SpotifyAPI(),
    })
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: new SpotifyAPI({ cache }), // Adjusting to match the expected structure
      };
    },
  });

  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

startApolloServer();

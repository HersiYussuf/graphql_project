import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";

// Correctly load and use the GraphQL schema from a file
const schemaPath = path.resolve(__dirname, "./schema.graphql");
const typeDefs = gql(readFileSync(schemaPath, { encoding: "utf-8" }));

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs })
  const { url } = await startStandaloneServer(server, { listen: { port: 5000 } }); // Ensure to specify the port or other options if necessary
  console.log(`
        🚀  Server is running!
        📭  Query at ${url}
    `);
}

startApolloServer();

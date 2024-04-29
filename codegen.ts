import type { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
    schema: "./src/schema.graphql",
    generates: {
        "./types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context#DataSourceContext",
            },

        },
    },

};
export default config;
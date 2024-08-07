import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/graphql/documents/**/*.gql",
  generates: {
    "src/graphql/codegen/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
        {
          "typescript-rtk-query": {
            importBaseApiFrom: "../baseApi",
            importBaseApiAlternateName: "baseApiWithGraphql",
            exportHooks: true,
          },
        },
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;

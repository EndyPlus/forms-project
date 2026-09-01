import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/",

  documents: "client/src/graphql/**/*.graphql",

  generates: {
    "client/src/helpers/generatedTypes.ts": {
      plugins: ["typescript"],
      config: {
        enumsAsTypes: true,
        useTypeImports: true,
      },
    },

    "client/src/services/generatedFormsApi.ts": {
      plugins: ["typescript-operations", "typescript-rtk-query"],
      config: {
        importBaseApiFrom: "./formsApi",
        importTypesFrom: "../helpers/generatedTypes",
        exportHooks: true,
        useTypeImports: true,
        dedupeOperationSuffix: true,
      },
    },

    "server/src/types/generatedServerTypes.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        enumsAsTypes: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;

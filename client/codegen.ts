import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/helpers/generatedTypes.ts": {
      plugins: ["typescript"],
      config: {
        enumsAsTypes: true,
        useTypeImports: true,
      },
    },
    "src/services/generatedFormsApi.ts": {
      plugins: ["typescript-operations", "typescript-rtk-query"],
      config: {
        importBaseApiFrom: "./formsApi",
        importTypesFrom: "../helpers/generatedTypes",
        exportHooks: true,
        useTypeImports: true,
        dedupeOperationSuffix: true,
      },
    },
  },
};

export default config;

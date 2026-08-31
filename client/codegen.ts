import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/services/generatedFormsApi.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-rtk-query"],
      config: {
        importBaseApiFrom: "./formsApi",
        exportHooks: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;

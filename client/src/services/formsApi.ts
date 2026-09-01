import { createApi } from "@reduxjs/toolkit/query/react";
import { GraphQLClient } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

// URL of GraphQL backend
export const client = new GraphQLClient("http://localhost:4000/");

export const api = createApi({
  reducerPath: "formsApi",
  baseQuery: graphqlRequestBaseQuery({ client }),
  // tagTypes: ["Form", "Response"],
  endpoints: () => ({}),
});

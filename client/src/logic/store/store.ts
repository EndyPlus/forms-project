import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/testSlice";
import { testApi } from "../../services/testApi";
import { api as generatedFormsApi } from "../../services/generatedFormsApi";

export const store = configureStore({
  reducer: {
    test: testReducer,

    [testApi.reducerPath]: testApi.reducer,
    [generatedFormsApi.reducerPath]: generatedFormsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      testApi.middleware,
      generatedFormsApi.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import narrowed from "./isNarrowed";

const store = configureStore({
  reducer: {
    isNarrowed: narrowed.reducer,
  },
});

export default store;

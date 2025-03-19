import { configureStore } from '@reduxjs/toolkit'
import bookReducer from "./slice/book.slice";

export const store = configureStore({
    reducer: {
      books: bookReducer
  },
})
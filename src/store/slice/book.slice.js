import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      state.value.push({})
    },
  },
})

export const { increment } = booksSlice.actions;

export default booksSlice.reducer
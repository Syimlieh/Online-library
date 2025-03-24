import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value.push({
        id: state.value.length + 1 || 1,
        ...action.payload
      })
    },
  },
})

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer
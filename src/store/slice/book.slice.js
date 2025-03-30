import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      id: 1,
      title: "The Great Gatsby",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjS6KIHWCqX65xfK3DQ9ghdIfHax6s--vC7Q&s",
      category: "Sci-Fi",
      author: "F. Scott Fitzgerald",
      rating: 5,
      description: "A novel about the American dream and the roaring twenties."
    },
    {
      id: 2,
      title: "Atomic Habits",
      image: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg",
      category: "Non-Fiction",
      author: "James Clear",
      rating: 4,
      description: "A guide to building good habits and breaking bad ones."
    },
    {
      id: 3,
      title: "Harry Potter and the Sorcerer’s Stone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tJNhtl4fvNnXeElC-rBSFwwIxODNd_ROzQ&s",
      category: "Fiction",
      author: "J.K. Rowling",
      rating: 5,
      description: "The first book in the magical Harry Potter series."
    }
  ],
  searchTerm: ""
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
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
})

export const { addBook, setSearch } = booksSlice.actions;

export default booksSlice.reducer
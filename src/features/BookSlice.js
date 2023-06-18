import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Love Bangladesh",
      author: "Nozrul Islam",
    },
    {
      id: uuidv4(),
      title: "Love Modina",
      author: "Ayman Khan",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id == id);
      if (isBookExist) {
        isBookExist[0].id = id;
        isBookExist[0].author = author;
        isBookExist[0].title = title;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;

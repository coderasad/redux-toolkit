import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BookSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h2 className="text-center text-2xl my-4 font-bold">Add Book</h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
        <div className="flex flex-col mb-4">
          <label htmlFor="title">Title:</label>
          <input
            className="rounded-md focus:ring-0 focus:border-green-600"
            type="text"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="author">author:</label>
          <input
            className="rounded-md focus:ring-0 focus:border-green-600 "
            type="text"
            id="author"
            name="author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-md"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";

const EditBook = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(state.id);
  const [title, setTitle] = useState(state.title);
  const [author, setAuthor] = useState(state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2 className="text-center text-2xl my-4 font-bold">Edit Book</h2>
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
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;

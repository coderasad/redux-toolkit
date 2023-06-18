import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2 className="text-center text-2xl my-4 font-bold">List of books</h2>
      <div className="border rounded-xl">
        <table className="rounded-xl overflow-hidden border-collapse table-auto w-full text-left">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-3">Sl No</th>
              <th>Title</th>
              <th>Author</th>
              <th className="text-center pr-3 w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => {
                const { id, title, author } = book;
                return (
                  <tr key={id} className="border-t">
                    <td className="p-3">{index + 1}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td className="text-right pr-3">
                      <Link
                        to="/edit-book"
                        state={{ id, title, author }}
                        className="hover:bg-yellow-500 bg-yellow-600 px-3 py-2 rounded-md"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(id)}
                        className="hover:bg-red-500 bg-red-600 px-3 py-2 rounded-md text-white ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksView;

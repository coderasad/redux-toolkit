import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../features/BooksView";
import EditBook from "../features/EditBook";
import AddBook from "../features/AddBook";
import Footer from "../layouts/Footer";

const Index = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book" element={<EditBook />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Index;

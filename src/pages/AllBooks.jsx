import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("Sort By Rating");
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/all-books").then((data) => {
      setBooks(data.data);
    });
  }, [axiosSecure]);
  useEffect(() => {
    if (sort === "Low To High") {
      axiosSecure.get("/all-books/sort-low-to-high").then((data) => {
        setBooks(data.data);
      });
    } else if (sort === "High To Low") {
      axiosSecure.get("/all-books/sort-high-to-low").then((data) => {
        setBooks(data.data);
      });
    } else {
      setBooks(books);
    }
  }, [books, sort, axiosSecure]);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-primary text-center pb-10">
        All Available Books
      </h2>
      <div className=" flex justify-end my-5 mr-10">
        <select
          onChange={(e) => setSort(e.target.value)}
          defaultValue="Pick a color"
          className="select bg-primary text-white w-40"
        >
          <option defaultValue={"Sort By Rating"}>Sort By Rating</option>
          <option>High To Low</option>
          <option>Low To High</option>
        </select>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-10 px-5">
          {books.map((book) => (
            <BookCard key={book._id} book={book} ClassName="h-[200px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;

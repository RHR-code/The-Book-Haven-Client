import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BookCard from "../components/BookCard";
import axios from "axios";

const AllBooks = () => {
  const { data } = useLoaderData();
  const [books, setBooks] = useState(data);
  const [sort, setSort] = useState("Sort By Rating");
  console.log(sort);
  useEffect(() => {
    if (sort === "Low To High") {
      axios
        .get("http://localhost:3000/all-books/sort-low-to-high")
        .then((data) => {
          setBooks(data.data);
        });
    } else if (sort === "High To Low") {
      axios
        .get("http://localhost:3000/all-books/sort-high-to-low")
        .then((data) => {
          setBooks(data.data);
        });
    } else {
      setBooks(data);
    }
  }, [data, sort]);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
          {books.map((book) => (
            <BookCard key={book._id} book={book} ClassName="h-[200px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;

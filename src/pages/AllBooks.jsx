import React from "react";
import { useLoaderData } from "react-router";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const { data } = useLoaderData();
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-primary text-center my-10">
        All Available Books
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
          {data.map((book) => (
            <BookCard key={book._id} book={book} ClassName="h-[200px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;

import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { useAxiosInstance } from "../hooks/useAxiosInstance";
import { PropagateLoader } from "react-spinners";
import BookCardSkeleton from "../components/BookCardSkel";
import NoBooksFound from "../components/CardNotFound";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/all-books?sort=${sort}&searchText=${searchText}`)
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setLoading(false);
      });
  }, [axiosInstance, sort, searchText]);

  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-primary text-center pb-10">
        All Available Books
      </h2>
      <div className=" flex justify-between my-5 mx-10">
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="input border border-primary"
          placeholder="Search Your Book"
        />
        <select
          onChange={(e) => setSort(e.target.value)}
          defaultValue="Pick a color"
          className="select bg-primary text-white w-40"
        >
          <option value="">Sort By Rating</option>
          <option value="desc">High To Low</option>
          <option value="asc">Low To High</option>
        </select>
      </div>
      <div>
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-10 px-5">
            {[...Array(8)].map((_, i) => (
              <BookCardSkeleton key={i} />
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-10 px-5">
          {books.map((book) => (
            <BookCard key={book._id} book={book} ClassName="h-[200px]" />
          ))}
        </div>
        {books.length === 0 && <NoBooksFound />}
      </div>
    </div>
  );
};

export default AllBooks;

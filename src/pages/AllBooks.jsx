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
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("");
  console.log(currentPage);
  const cat = [
    "All",
    "Fantasy",
    "history",
    "Thriller",
    "Mystery",
    "Comedy",
    "Romance",
  ];
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(
        `/all-books?sort=${sort}&searchText=${searchText}&skip=${
          currentPage * 10
        }&limit=${8}&filter=${category}`
      )
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setLoading(false);
      });
  }, [axiosInstance, sort, currentPage, searchText, category]);

  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-primary text-center pb-10">
        All Available Books
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-2/12 md:3/12  flex md:flex-col items-center flex-wrap  gap-5 mx-2 border-transparent md:border-r-2 md:border-primary pr-5">
          <h2 className="text-center text-primary my-5 font-bold text-base lg:text-xl">
            Filter By Category
          </h2>
          {cat.map((item, i) => (
            <button
              key={i}
              onClick={() =>
                item !== "All" ? setCategory(item) : setCategory("")
              }
              className={`md:btn btn-primary md:w-full ${
                item === category ? "btn-primary" : "btn-outline"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="lg:w-10/12 md:w-9/12 ">
          <div className=" flex  justify-between my-5 mx-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5  px-5">
              {books.map((book) => (
                <BookCard
                  key={book._id}
                  book={book}
                  ClassName="h-[200px]"
                  pt="pt-2"
                />
              ))}
            </div>
            {books.length === 0 && <NoBooksFound />}
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="flex justify-center gap-5 mt-10">
        {[...Array(8)].map((_, i) => (
          <button
            onClick={() => setCurrentPage(i)}
            key={i}
            className={`btn btn-primary  ${
              currentPage === i ? "btn-primary " : "btn-outline"
            } `}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

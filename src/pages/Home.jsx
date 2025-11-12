import React, { use } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useLoaderData } from "react-router";
import BookCard from "../components/BookCard";
import BookOfTheWeek from "../components/BookOfTheWeek";
import TopGenres from "../components/TopGenres";

const Home = () => {
  const { data } = useLoaderData();
  console.log("data", data);

  const { user } = use(AuthContext);

  return (
    <div>
      {/* banner */}
      <div className="pb-20">
        <Banner />
      </div>
      {/* latest books */}
      <div className="pb-20">
        <h2 className="text-4xl font-bold text-primary text-center my-10">
          Latest Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 pb-20">
          {data.map((book) => (
            <BookCard key={book._id} book={book} ClassName="h-[300px]" />
          ))}
        </div>
      </div>
      {/* Book Of the Week */}
      <div className="pb-20">
        <BookOfTheWeek />
      </div>
      {/* Top Genres */}
      <div className="pb-20">
        <TopGenres />
      </div>
    </div>
  );
};

export default Home;

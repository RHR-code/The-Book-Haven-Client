import React from "react";
import BannerBG from "../assets/Shiny Overlay.svg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="relative">
      <img src={BannerBG} alt="" />
      <div className="absolute top-0 text-base-100">
        <h1 className="text-6xl font-bold leading-tight">
          The Ultimate <br /> Library <br /> For Books
        </h1>
        <div className="text-lg font-semibold text-base-100/80 py-5">
          <p>Trusted by all the expert book readers</p>
          <p>One place to find all sorts of books</p>
        </div>
        <div className="flex gap-5">
          <Link to="/all-books" className="btn btn-primary">
            All Books
          </Link>
          <Link to="/add-books" className="btn btn-primary">
            Create Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

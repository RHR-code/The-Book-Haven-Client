import React from "react";
import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { NavLink } from "react-router";

const BookCard = ({ book, ClassName }) => {
  const { _id, title, genre, author, rating, coverImage } = book;
  return (
    <div className=" rounded-2xl flex flex-col justify-between p-5 bg-secondary/20  shadow-sm hover:scale-102 transition ease-in-out">
      <div className="bg-base-100 rounded-2xl">
        <img
          className={`${ClassName} mb-5 w-full object-contain  rounded-2xl py-5`}
          src={coverImage}
          alt=""
        />
      </div>
      <div className="px-5 flex flex-col gap-5 pb-5 ">
        <h2 className="text-lg font-bold pt-5 line-clamp-1">{title}</h2>
        <p className="font-bold space-x-1">
          {" "}
          {genre.split("/").map((gen, index) => (
            <span key={index} className="badge badge-outline badge-primary">
              {" "}
              {gen}
            </span>
          ))}
        </p>
        <div className="flex justify-between font-bold ">
          <p className="flex items-center gap-2">
            {" "}
            {rating} <FaStar fill="#f7a202" />
          </p>
          <p> {author}</p>
        </div>
        <NavLink to={`/book-details/${_id}`} className="btn btn-primary">
          <TbListDetails /> View Details
        </NavLink>
      </div>
    </div>
  );
};

export default BookCard;

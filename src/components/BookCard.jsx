import React from "react";
import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { NavLink } from "react-router";

const BookCard = ({ book, ClassName, pt }) => {
  const { _id, title, genre, author, rating, coverImage } = book;
  return (
    <div className=" rounded-2xl flex flex-col justify-between p-3 bg-secondary  shadow-sm hover:scale-102 transition ease-in-out">
      <div className="bg-gray-200 rounded-2xl">
        <img
          className={`${ClassName} mb-1 w-full object-contain  rounded-2xl py-2`}
          src={coverImage}
          alt=""
        />
      </div>
      <div className="px-5 flex flex-col gap-2 pb-5 ">
        <h2 className={`text-lg font-bold ${pt} line-clamp-1`}>{title}</h2>
        <p className="font-bold line-clamp-1 space-x-1">
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
          <p className="line-clamp-1"> {author}</p>
        </div>
        <NavLink to={`/book-details/${_id}`} className="btn btn-primary">
          <TbListDetails /> View Details
        </NavLink>
      </div>
    </div>
  );
};

export default BookCard;

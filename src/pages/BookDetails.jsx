import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Comment from "../components/Comment";

const BookDetails = () => {
  const { data } = useLoaderData();
  const {
    author,
    coverImage,
    genre,
    rating,
    summary,
    title,
    userEmail,
    userName,
  } = data;
  console.log(data);

  return (
    <>
      <div className="px-10 my-10">
        <div className="flex items-center">
          <div className="flex-1/2 flex bg-secondary/20 justify-center items-center min-h-[500px] border-2 border-secondary rounded-l-2xl">
            <img className="h-[400px] shadow-2xl" src={coverImage} alt="" />
          </div>
          <div className="flex-1/2 flex flex-col gap-5 border-2 border-secondary min-h-[500px] justify-center p-10 border-l-0 rounded-r-2xl">
            <h1 className="font-bold text-primary text-4xl">{title}</h1>
            <h3 className="font-semibold">{author}</h3>
            <p className="font-semibold flex items-center gap-2">
              <span className="font-bold">Rating:</span> {rating}{" "}
              <FaStar fill="#f7a202" />
            </p>
            <p>{summary}</p>
            <p className="font-bold space-x-1">
              {" "}
              {genre.split("/").map((gen, index) => (
                <span key={index} className="badge badge-soft badge-primary">
                  {" "}
                  {gen}
                </span>
              ))}
            </p>
            <div className="flex justify-between font-bold">
              <p>{userName}</p>
              <p>{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
      {/* comment section */}
      <div>
        <Comment />
      </div>
    </>
  );
};

export default BookDetails;

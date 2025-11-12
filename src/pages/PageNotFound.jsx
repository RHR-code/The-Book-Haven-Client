import React from "react";
import pageErrImg from "../assets/404 error.json";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mb-10">
      <div>
        <Lottie
          animationData={pageErrImg}
          style={{ width: 700, height: 500 }}
          loop
          autoplay
        />
      </div>
      <h1 className="font-semibold text-4xl md:text-5xl">
        Oops, page not found!
      </h1>
      <p className=" text-center md:text-xl pt-4 ">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center mt-10 rounded-sm">
        <button
          onClick={() => navigate(-1)}
          className="px-10 py-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-70 hover:scale-105 text-white font-semibold text-base"
        >
          {" "}
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

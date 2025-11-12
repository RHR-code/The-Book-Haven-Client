import React from "react";
import BannerBG from "../assets/Shiny Overlay.svg";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import animation1 from "../assets/Back to school!.json";
import animation2 from "../assets/STUDENT.json";
import animation3 from "../assets/Education edit.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div className="relative flex justify-between h-[600px] my-10">
      <img src={BannerBG} alt="" />

      <div className="absolute top-0 flex items-center  w-full h-full p-10 ">
        <div className=" text-white flex-1/2 ">
          <h1 className="text-7xl font-bold leading-tight dark:text-white ">
            The Ultimate <br />
            <Typewriter
              options={{
                strings: ["Library", "Place", "Entertainment"],
                autoStart: true,
                loop: true,
              }}
            />
            For Books
          </h1>
          <div className="text-lg font-semibold text-white/80 py-5 ">
            <p>Trusted by all the expert book readers</p>
            <p>One place to find all sorts of books</p>
          </div>
          <div className="flex gap-5 ">
            <Link to="/all-books" className="btn btn-primary  font-bold ">
              All Books <FaArrowRight />
            </Link>
            <Link to="/add-books" className="btn btn-primary font-bold">
              Create Books <FaArrowRight />
            </Link>
          </div>

          <div className="absolute bottom-5 left-[35%] ">
            <Lottie
              animationData={animation2}
              style={{ width: 200, height: 200 }}
              loop
              autoplay
            />
          </div>

          <div className="absolute right-5 top-0">
            <Lottie
              animationData={animation3}
              style={{ width: 200, height: 200 }}
              loop
              autoplay
            />
          </div>
        </div>

        <div className="flex-1/2 flex items-center justify-center mr-24">
          <Lottie
            animationData={animation1}
            style={{ width: 500, height: 500 }}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

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
    <div className="relative flex justify-between h-[600px] ">
      <img src={BannerBG} alt="" />

      <div className="absolute top-0 flex flex-col-reverse gap-10 md:gap-0 lg:flex-row items-center  w-full h-full  md:p-10 p-5">
        <div className=" text-white lg:flex-1/2 w-full">
          <h1 className="lg:text-7xl text-4xl font-bold leading-tight dark:text-white ">
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
            <Link
              to="/dashboard/add-books"
              className="btn btn-primary font-bold"
            >
              Create Books <FaArrowRight />
            </Link>
          </div>

          <div className="absolute lg:bottom-5 lg:left-[35%] right-52 bottom-24 md:right-56">
            <Lottie
              animationData={animation2}
              className="hidden md:flex lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px]"
              // style={{ width: 200, height: 200 }}
              loop
              autoplay
            />
          </div>

          <div className="absolute right-0 md:right-5 lg:top-0 top-64 md:top-78 ">
            <Lottie
              animationData={animation3}
              // style={{ width: 200, height: 200 }}
              className="md:w-[200px] md:h-[200px] w-[150px] h-[150px]"
              loop
              autoplay
            />
          </div>
        </div>

        <div className="lg:flex-1/2 w-full flex items-center justify-center mr-10 lg:mr-24">
          <Lottie
            animationData={animation1}
            // style={{ width: 500, height: 500 }}
            className="lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-[350px]  w-[300px] h-[300px]"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

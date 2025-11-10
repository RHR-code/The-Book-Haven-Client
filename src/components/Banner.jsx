import React from "react";
import BannerBG from "../assets/Shiny Overlay.svg";
import { Link } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="relative flex justify-between h-[600px] my-10">
      <img src={BannerBG} alt="" />

      <div className="absolute top-0 flex items-center  w-full h-full p-10 ">
        <div className=" text-base-100 flex-1/2 ">
          <h1 className="text-7xl font-bold leading-tight ">
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
          <div className="text-lg font-semibold text-base-100/80 py-5 ">
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

          <div className="absolute bottom-5 left-[30%] ">
            <DotLottieReact
              src="https://lottie.host/2ae2504b-6779-4d0a-8935-9670e327ffd8/wxZHz4clxe.lottie"
              style={{ width: 300 }}
              loop
              autoplay
            />
          </div>

          <div className="absolute right-0 top-0">
            <DotLottieReact
              src="https://lottie.host/650e5bbe-b90f-4740-b5b1-9c1eb2a0393e/uAPNDIXrRb.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        <div className="flex-1/2 flex items-center justify-center mr-24">
          <DotLottieReact
            src="https://lottie.host/29b8fe73-bcd2-435c-87cd-92a451be09a1/LNiKaz0v9y.lottie"
            loop
            style={{ width: 500, height: 500 }}
            autoplay
            rendererSettings={{
              preserveAspectRatio: "xMidYMid slice",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

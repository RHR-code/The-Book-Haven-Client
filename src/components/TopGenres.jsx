import React from "react";

const TopGenres = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-primary text-center my-10">
        Top Genres
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-base-200 p-10">
        <div className="relative  flex items-center justify-center ">
          <img
            className="w-full object-cover rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ly3kNBksFMw5A6ON8xIk25GXUlEyp0s86Q&s"
            alt=""
          />
          <div className="bg-black/30 absolute inset-0 rounded-2xl"></div>
          <h2 className="font-bold text-5xl shadow-2xl  absolute text-base-100 top-[50%] left-[50%] -translate-[50%]">
            Thriller
          </h2>
        </div>
        <div className="relative  flex items-center justify-center ">
          <img
            className="w-full object-cover rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqYb58vG_teJVW3V_Udi0eH9s5ecHMay_6Q&s"
            alt=""
          />
          <div className="bg-black/30 absolute inset-0 rounded-2xl"></div>
          <h2 className="font-bold text-5xl text-center shadow-2xl  absolute text-base-100 top-[50%] left-[50%] -translate-[50%]">
            Science
          </h2>
        </div>
        <div className="relative  flex items-center justify-center ">
          <img
            className="w-full object-cover rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT808UdJFVSxBpyTm4edGE2N4y8eK0ethxL9w&s"
            alt=""
          />
          <div className="bg-black/30 absolute inset-0 rounded-2xl"></div>
          <h2 className="font-bold text-5xl text-center shadow-2xl  absolute text-base-100 top-[50%] left-[50%] -translate-[50%]">
            Fantasy
          </h2>
        </div>
        <div className="relative  flex items-center justify-center ">
          <img
            className="w-full object-cover rounded-2xl"
            src="https://assets.penguinrandomhouse.com/wp-content/uploads/2024/11/20120950/PRH_CollegeRomanceBooks-1200x628-1.jpg"
            alt=""
          />
          <div className="bg-black/30 absolute inset-0 rounded-2xl"></div>
          <h2 className="font-bold text-5xl text-center shadow-2xl  absolute text-base-100 top-[50%] left-[50%] -translate-[50%]">
            Romance
          </h2>
        </div>
        <div className="relative  flex items-center justify-center ">
          <img
            className="w-full object-cover rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEpky70nXbuWr8yszStbmiZJHPYM0UU9gpg&s"
            alt=""
          />
          <div className="bg-black/30 absolute inset-0 rounded-2xl"></div>
          <h2 className="font-bold text-5xl text-center shadow-2xl  absolute text-base-100 top-[50%] left-[50%] -translate-[50%]">
            History
          </h2>
        </div>
        <div className="relative  flex items-center justify-center ">
          <img
            className="w-full object-cover rounded-2xl"
            src="https://robbreport.com/wp-content/uploads/2020/04/composite-b-3.jpg?w=1000"
            alt=""
          />
          <div className="bg-black/30 absolute inset-0 rounded-2xl"></div>
          <h2 className="font-bold text-5xl text-center shadow-2xl  absolute text-base-100 top-[50%] left-[50%] -translate-[50%]">
            Biography
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TopGenres;

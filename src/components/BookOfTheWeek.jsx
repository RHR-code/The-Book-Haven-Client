import React from "react";

const BookOfTheWeek = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-primary text-center my-10">
        Book Of The Week
      </h2>

      <div className="bg-primary text-white flex items-center  h-[600px] my-10 px-10">
        <div className="flex-1/2 flex gap-5 flex-col">
          <h4 className="font-bold text-lg">Best Book !</h4>
          <h1 className="text-7xl font-bold leading-tight">
            The Book Of
            <br /> The Week
          </h1>
          <p className="font-bold text-xl">One Hundred Years of Solitude</p>
          <p className="font-bold ">By Gabriel García Márquez</p>
        </div>

        <div className="flex-1/2 flex items-center justify-center ">
          <img
            className="-mr-5 z-10 shadow-2xl"
            src="https://images.booksense.com/images/041/531/9780060531041.jpg"
            alt=""
          />
          <img
            className="w-[270px] mt-10 "
            src="https://s21618.pcdn.co/wp-content/uploads/2016/12/100_Years_First_Ed_Hi_Res-768x1153.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BookOfTheWeek;

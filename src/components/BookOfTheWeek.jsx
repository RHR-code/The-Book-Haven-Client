import React from "react";

const BookOfTheWeek = () => {
  return (
    <>
      <h2 className="md:text-4xl text-3xl font-bold text-primary text-center my-10">
        Book Of The Week
      </h2>

      <div className="bg-primary text-white flex items-center flex-col-reverse md:flex-row  h-[600px] my-10 px-10">
        <div className="flex-1/2 flex gap-5 flex-col">
          <h4 className="font-bold text-lg">Best Book !</h4>
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold leading-tight">
            The Book Of
            <br /> The Week
          </h1>
          <p className="font-bold text-xl">One Hundred Years of Solitude</p>
          <p className="font-bold ">By Gabriel García Márquez</p>
        </div>

        <div className="flex-1/2 flex items-center justify-center ">
          <img
            className="-mr-5 z-10 shadow-2xl w-[150px] lg:w-full md:w-[200px]"
            src="https://images.booksense.com/images/041/531/9780060531041.jpg"
            alt=""
          />
          <img
            className="lg:w-[270px] mt-10 w-[150px] md:w-[200px] "
            src="https://s21618.pcdn.co/wp-content/uploads/2016/12/100_Years_First_Ed_Hi_Res-768x1153.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BookOfTheWeek;

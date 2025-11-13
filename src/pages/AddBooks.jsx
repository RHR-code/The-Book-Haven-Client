import axios from "axios";
import React, { use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddBooks = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const rating = parseFloat(form.rating.value);
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const createdAt = new Date();
    const userName = user.displayName;
    const userEmail = user.email;
    const bookInfo = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      createdAt,
      userName,
      userEmail,
    };

    axiosSecure
      .post("/add-books", bookInfo)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("Book Added Successfully");
          e.target.reset();
        }
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="w-full">
      <div className=" flex flex-col justify-center pt-5 w-11/12 mx-auto  my-10 ">
        <div className="bg-accent  flex flex-col items-center justify-center gap-5 rounded-t-2xl py-10 ">
          <h2 className="font-black md:text-5xl text-3xl text-center text-white leading-tight">
            Welcome <br /> Add Your Book!
          </h2>
        </div>
        <div className="rounded-b-2xl w-full  shrink-0 shadow-2xl  md:px-10 pt-5 border-4 border-secondary border-t-0">
          <div className="card-body">
            <form onSubmit={handleAddBook}>
              <fieldset className="fieldset flex flex-col gap-5">
                {/* title&author */}
                <div className="flex flex-col md:flex-row gap-5">
                  {/* title */}
                  <div className="flex-1/2 space-y-5">
                    <label className="label text-secondary text-xl font-semibold">
                      title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="input w-full border-2 border-secondary"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>

                  {/* Author */}
                  <div className="flex-1/2 space-y-5">
                    <label className="label text-secondary text-xl font-semibold">
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      className="input w-full  border-2 border-secondary"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                {/* genre&rating */}
                <div className="flex flex-col md:flex-row gap-5 ">
                  {/* Genre */}
                  <div className="flex-1/2 space-y-5">
                    <label className="label text-secondary text-xl font-semibold">
                      Genre
                    </label>
                    <input
                      type="text"
                      name="genre"
                      className="input w-full border-2 border-secondary"
                      placeholder="Enter Your PhotoURL"
                      required
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex-1/2 space-y-5">
                    <label className="label text-secondary  text-xl font-semibold ">
                      Rating
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="5"
                        step="0.1"
                        name="rating"
                        className="input w-full border-2 border-secondary"
                        placeholder="Enter Your Password"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* summary */}
                <label className="label text-secondary text-xl font-semibold">
                  summary
                </label>
                <textarea
                  name="summary"
                  id=""
                  className="w-full border-2 border-secondary rounded-sm"
                  placeholder="Write Your Summery"
                  cols="30"
                  rows="3"
                ></textarea>
                {/* image  */}
                <label className="label text-secondary text-xl font-semibold">
                  Cover Image
                </label>
                <input
                  type="text"
                  name="coverImage"
                  className="input w-full border-2 border-secondary"
                  placeholder="Enter Your PhotoURL"
                  required
                />
                <button className="btn btn-primary mt-4 font-bold text-lg">
                  Add Book
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;

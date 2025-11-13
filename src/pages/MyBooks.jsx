import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UpdateModal from "../components/UpdateModal";

const MyBooks = () => {
  const { user } = use(AuthContext);
  const [bookInfo, setBookInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/all-books?email=${user?.email}`)
      .then((data) => {
        console.log(data.data);
        setBookInfo(data.data);
      });
  }, [user]);
  // delete book functionality
  const handleDeleteBook = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete-book/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              const newBookInfo = bookInfo.filter((book) => book._id !== id);
              setBookInfo(newBookInfo);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            toast.error(error.code);
          });
      }
    });
  };
  // Ref to open and close the modal
  const modalRef = useRef();
  const [book, setBook] = useState({});

  // update book btn to open modal
  const handleUpdateBookBtn = (id) => {
    modalRef.current.showModal();

    axios.get(`http://localhost:3000/book-details/${id}`).then((data) => {
      setBook(data.data);
      console.log(data.data);
    });
  };
  // close book
  const handleClose = () => {
    modalRef.current.close();
  };
  // update book to update data from the modal
  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const rating = parseFloat(form.rating.value);
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const updatedAt = new Date();
    const bookData = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      updatedAt,
    };

    axios
      .patch(`http://localhost:3000/update-book/${book._id}`, bookData)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount) {
          toast.success("Book Update successfully");
          const newBookInfo = bookInfo.filter((item) => item._id !== book._id);
          setBookInfo([...newBookInfo, { ...book, ...bookData }]);
          modalRef.current.close();
        }
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <>
      <div className="px-10 my-20">
        <h1 className="font-bold text-4xl text-center py-10 text-primary">
          All My Books
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table border-separate border-spacing-y-2.5 ">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-primary">Book Image</th>
                  <th className="text-primary">SL No</th>
                  <th className="text-primary">Book Provider</th>
                  <th className="text-primary">Book Name & Author</th>
                  <th className="text-primary">Action</th>
                </tr>
              </thead>
              {bookInfo.map((book, index) => (
                <tbody key={book._id} className="font-semibold">
                  {/* row 1 */}
                  <tr className="border-2 border-secondary bg-secondary/20 ">
                    <th>
                      <label>
                        <img className="h-20" src={book.coverImage} alt="" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">{index + 1}</div>
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <span>{book.userName}</span>
                        <span>{book.userEmail}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                      </div>
                    </td>
                    <th>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleDeleteBook(book._id)}
                          className="badge badge-outline badge-error hover:badge-soft cursor-pointer w-30"
                        >
                          Delete Book
                        </button>
                        <button
                          onClick={() => handleUpdateBookBtn(book._id)}
                          className="badge badge-outline badge-success hover:badge-soft cursor-pointer w-30 "
                        >
                          Update Book
                        </button>
                      </div>
                    </th>
                  </tr>
                </tbody>
              ))}

              {/* foot */}
            </table>
          </div>
        </div>
      </div>
      {/* modal */}

      <div>
        <dialog
          ref={modalRef}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="rounded-2xl w-full  shrink-0 shadow-2xl  pt-5 border-4 border-secondary ">
              <div className="card-body">
                <form onSubmit={handleUpdateBook}>
                  <fieldset className="fieldset flex flex-col gap-5">
                    {/* title&author */}
                    <div className="flex gap-5">
                      {/* title */}
                      <div className="flex-1/2 space-y-5">
                        <label className="label text-secondary text-xl font-semibold">
                          title
                        </label>
                        <input
                          type="text"
                          name="title"
                          defaultValue={book?.title}
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
                          defaultValue={book?.author}
                          className="input w-full  border-2 border-secondary"
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                    </div>
                    {/* genre&rating */}
                    <div className="flex gap-5 ">
                      {/* Genre */}
                      <div className="flex-1/2 space-y-5">
                        <label className="label text-secondary text-xl font-semibold">
                          Genre
                        </label>
                        <input
                          type="text"
                          name="genre"
                          defaultValue={book?.genre}
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
                            defaultValue={book?.rating}
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
                      defaultValue={book?.summary}
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
                      defaultValue={book?.coverImage}
                      name="coverImage"
                      className="input w-full border-2 border-secondary"
                      placeholder="Enter Your PhotoURL"
                      required
                    />
                    <button className="btn btn-primary mt-4 font-bold text-lg">
                      Update Book
                    </button>

                    {/* close */}
                    <div>
                      <div className="">
                        <div>
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-outline btn-primary w-full"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default MyBooks;

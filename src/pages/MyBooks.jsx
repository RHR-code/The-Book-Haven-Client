import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

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
  const handleUpdateBook = (id) => {};

  return (
    <div className="px-10">
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
                        className="badge badge-outline badge-error hover:badge-soft cursor-pointer"
                      >
                        Delete Book
                      </button>
                      <button
                        onClick={() => handleUpdateBook(book._id)}
                        className="badge badge-outline badge-success hover:badge-soft cursor-pointer"
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
  );
};

export default MyBooks;

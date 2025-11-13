import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useParams } from "react-router";

const Comment = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/comment/${id}`).then((data) => {
      setComment(data.data);
    });
  }, [id]);

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    const commentInfo = {
      comment: commentText,
      bookId: id,
      photoURL: user.photoURL,
      displayName: user.displayName,
    };

    axios
      .post("http://localhost:3000/add-comment", commentInfo)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          commentInfo._id = data.data.insertedId;
          console.log(data.data.insertedId, comment);

          setComment([...comment, commentInfo]);
          e.target.reset();
        }
      });
  };
  return (
    <div className="mb-20 px-5">
      <div className="bg-base-200 max-w-3xl mx-auto p-5 lg:p-10 border-2 border-secondary rounded-2xl ">
        <h2 className="md:text-4xl text-3xl font-bold text-primary text-center my-10">
          Leave A Comment
        </h2>
        <div>
          <form
            onSubmit={handleAddComment}
            className="flex flex-col items-center gap-5 mb-5"
          >
            <textarea
              className="border-2 p-5 w-full rounded-2xl bg-base-100"
              name="comment"
              cols="60"
              rows="3"
              placeholder="Write Your Comment"
            ></textarea>

            <button className="btn btn-primary">Add Comment</button>
          </form>
        </div>
        {comment.map((data) => (
          <div
            key={data._id}
            className="space-y-5 bg-base-100 border-2 rounded-2xl w-full md:w-2xl p-5 md:p-10 mx-auto mb-5"
          >
            <div className="flex items-center gap-5">
              <img
                className="w-11 h-11 object-cover  rounded-full"
                src={data.photoURL}
                alt=""
              />
              <h4 className="font-bold text-xl">{data.displayName}</h4>
            </div>
            <div>
              <p>{data.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;

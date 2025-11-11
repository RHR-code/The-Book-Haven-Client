import React from "react";

const UpdateModal = ({ modalRef }) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="rounded-b-2xl w-full  shrink-0 shadow-2xl  md:px-10 pt-5 border-4 border-secondary border-t-0">
            <div className="card-body">
              <form>
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
                  <div className="flex gap-5 ">
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
          <div>
            <div className="">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline ">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;

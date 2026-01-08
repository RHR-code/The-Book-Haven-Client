import React, { use, useRef } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCalendar,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { user, setUser, userSignOut, userProfile } = use(AuthContext);
  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const modalRef = useRef();

  const handleEditProfile = () => {
    modalRef.current.showModal();
  };
  const handleUpdate = (data) => {
    data.preventDefault();
    let name = data.target.displayName.value;
    let photo = data.target.photoURL.value;
    console.log(name, photo);

    userProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        modalRef.current.close();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClose = () => {
    modalRef.current.close();
  };

  const handleLogout = () => {
    userSignOut().then(() => {
      toast.success("Logged Out Successful");
    });
  };

  // https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000
  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className=" rounded-lg shadow-lg overflow-hidden">
          <div className="h-32 bg-primary"></div>

          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-20">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt={user?.displayName}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
              />

              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold ">
                  {user?.displayName || "User"}
                </h1>
                <p className="text-gray-600 mt-1">{user?.email}</p>

                <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
                  {user?.emailVerified ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <FaCheckCircle /> Email Verified
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-orange-600 text-sm">
                      <FaTimesCircle /> Email Not Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Account Information */}
          <div className=" rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-secondary">
              Account Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaUser className="mt-1 text-secondary" />
                <div>
                  <p className="text-gray-600 text-sm">Display Name</p>
                  <p className="font-semibold">
                    {user?.displayName || "Not set"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-secondary" />
                <div>
                  <p className="text-gray-600 text-sm">Email Address</p>
                  <p className="font-semibold">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-secondary" />
                <div>
                  <p className="text-gray-600 text-sm">Email Verification</p>
                  <p className="font-semibold">
                    {user?.emailVerified ? "Verified" : "Not Verified"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Account Activity */}
          <div className=" rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-secondary">
              Account Activity
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCalendar className="mt-1 text-secondary" />
                <div>
                  <p className="text-gray-600 text-sm">Member Since</p>
                  <p className="font-semibold">
                    {formatDate(user?.metadata?.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="mt-1 text-secondary" />
                <div>
                  <p className="text-gray-600 text-sm">Last Login</p>
                  <p className="font-semibold">
                    {formatDateTime(user?.metadata?.lastSignInTime)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCalendar className="mt-1 text-secondary" />
                <div>
                  <p className="text-gray-600 text-sm">Account Created</p>
                  <p className="font-semibold">
                    {formatDateTime(user?.metadata?.creationTime)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8  rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-secondary">
            Account Actions
          </h2>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleEditProfile}
              className="px-6 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity bg-primary"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity bg-red-500"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      {/* Modal for Profile Update */}

      <dialog
        id="my_modal_5"
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Your Profile</h3>
          <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
            <label>Your Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="displayName"
              className="input"
              placeholder="Your Name"
            />
            <label>Your PhotoURL</label>
            <input
              type="text"
              defaultValue={user?.photoURL}
              name="photoURL"
              className="input"
              placeholder="Your Email"
            />
            <button className="btn btn-primary">Update</button>
            <button type="button" onClick={handleClose} className="btn">
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

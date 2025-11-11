import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { userSignUp, setUser, userProfile, googleSignIn } = use(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/;

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully LogedIn");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    if (!passRegex.test(password)) {
      setError(
        "Password must be at least 6 character and should include a uppercase and lowercase letter"
      );
    } else {
      userSignUp(email, password)
        .then((res) => {
          setUser(res.user);
          userProfile({ displayName, photoURL }).then(() => {
            setUser({ ...res.user, displayName, photoURL });
            toast.success("Successfully SignedUp");
            setError("");
            navigate("/");
            e.target.reset();
          });
        })
        .catch((err) => {
          toast.error(err.code);
        });
    }
  };
  return (
    <div className="w-full">
      <div className=" flex justify-center pt-5 w-11/12 mx-auto  my-10 ">
        <div className="bg-accent w-5/12 flex flex-col items-center justify-center gap-5 rounded-l-2xl shadow-2xl ">
          <h2 className="font-black text-5xl text-center text-base-100 leading-tight">
            Welcome <br /> To The Website!
          </h2>
          <p className="text-base-100 font-bold">
            If you already have an account
          </p>
          <p className="text-base-100 text-base">
            <Link to="/login" className="btn btn-primary px-10">
              Login
            </Link>
          </p>
        </div>
        <div className="card  w-7/12 max-w-2xl shrink-0 shadow-2xl  md:px-10 rounded-r-2xl pt-5 border-4 border-secondary border-l-0">
          <div className="card-body">
            <h1 className="text-secondary font-bold text-4xl text-center">
              User SignUp
            </h1>
            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset flex flex-col gap-5">
                <label className="label text-secondary text-xl font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input w-full border-2 border-secondary"
                  placeholder="Enter Your Name"
                  required
                />
                <label className="label text-secondary text-xl font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input w-full  border-2 border-secondary"
                  placeholder="Enter Your Email"
                  required
                />
                <label className="label text-secondary text-xl font-semibold">
                  Photo-URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="input w-full border-2 border-secondary"
                  placeholder="Enter Your PhotoURL"
                  required
                />
                <label className="label text-secondary  text-xl font-semibold ">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    className="input w-full border-2 border-secondary"
                    placeholder="Enter Your Password"
                    required
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-2.5 z-10"
                  >
                    {showPass ? (
                      <FaRegEyeSlash fill="#4ecdc4" size={20} />
                    ) : (
                      <FaEye size={20} fill="#4ecdc4" />
                    )}
                  </div>
                </div>
                <button className="btn btn-primary mt-4 font-bold text-lg">
                  Register
                </button>
                <button
                  type="button"
                  className="btn bg-white text-black border-primary"
                  onClick={handleGoogleSingIn}
                >
                  <FcGoogle size={20} /> Login with Google
                </button>

                {error && <p className="text-red-500">{error}</p>}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

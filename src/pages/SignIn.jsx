import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { user, userSignIn, setUser, googleSignIn } = use(AuthContext);
  const { state } = useLocation();
  console.log("from login", state);

  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully LogedIn");
        navigate(state ? state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(state ? state : "/");
        toast.success("Logged In Successfully");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="w-full">
      <div className=" flex flex-col md:flex-row justify-center pt-5 w-11/12 mx-auto  my-10 gap-5 md:gap-0">
        <div className="bg-accent  md:w-5/12 flex flex-col items-center justify-center gap-5 rounded-2xl md:rounded-l-2xl shadow-2xl p-5 md:p-0">
          <h2 className="font-black lg:text-5xl text-4xl   text-center text-white leading-tight">
            Welcome <br /> To Sign In Page!
          </h2>
          <p className="text-white font-bold">If you Don't have an account</p>
          <p className="text-base-100 text-base">
            <Link to="/signup" className="btn btn-primary px-10">
              SignUp
            </Link>
          </p>
        </div>
        <div className="card  md:w-7/12 max-w-2xl shrink-0 shadow-2xl  lg:px-10 rounded-2xl md:rounded-r-2xl pt-5 border-4 border-secondary md:border-l-0 py-10">
          <div className="card-body">
            <h1 className="text-secondary font-bold text-4xl text-center">
              User LogIn
            </h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset flex flex-col gap-5">
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
                <p className="italic">Forget Password?</p>
                <button className="btn btn-primary mt-4 font-bold text-lg">
                  LogIn
                </button>
                <button
                  type="button"
                  className="btn bg-white text-black border-primary"
                  onClick={handleGoogleSingIn}
                >
                  <FcGoogle size={20} /> Login with Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

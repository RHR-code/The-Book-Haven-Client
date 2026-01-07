import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AllBooks from "../pages/AllBooks";
import AddBooks from "../pages/AddBooks";
import MyBooks from "../pages/MyBooks";
import Signup from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import axios from "axios";
import BookDetails from "../pages/BookDetails";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../pages/PageNotFound";
import instance from "../hooks/useAxiosInstance";
import DashboardLayout from "../layout/DashboardLayout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route to="/" element={<MainLayout />}>
      <Route
        index={true}
        loader={() => instance.get("/latest-books")}
        element={<Home />}
      />
      <Route path="all-books" element={<AllBooks />} />
      <Route path="book-details/:id" element={<BookDetails />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route
        path="add-books"
        element={
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        }
      />
      <Route
        path="my-books"
        element={
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        }
      /> */}
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="/*" element={<PageNotFound />} />
    </Route>,
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      }
    >
      <Route index={true} element={<MyBooks />} />
      <Route path="my-books" element={<MyBooks />} />
      <Route path="add-books" element={<AddBooks />} />
    </Route>,
  ])
);

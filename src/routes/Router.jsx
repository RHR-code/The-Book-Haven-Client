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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<MainLayout />}>
      <Route
        index={true}
        loader={() => instance.get("/latest-books")}
        element={<Home />}
      />
      <Route
        path="all-books"
        // loader={() => instance.get("/all-books")}
        element={<AllBooks />}
      />
      <Route
        path="book-details/:id"
        // loader={({ params }) => instance.get(`/book-details/${params.id}`)}
        element={<BookDetails />}
      />
      <Route
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
      />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="/*" element={<PageNotFound />} />
    </Route>
  )
);

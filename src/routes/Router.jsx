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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<MainLayout />}>
      <Route
        index={true}
        loader={() => axios.get("http://localhost:3000/latest-books")}
        element={<Home />}
      />
      <Route
        path="all-books"
        loader={() => axios.get("http://localhost:3000/all-books")}
        element={
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        }
      />
      <Route
        path="book-details/:id"
        loader={({ params }) =>
          axios.get(`http://localhost:3000/book-details/${params.id}`)
        }
        element={
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        }
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

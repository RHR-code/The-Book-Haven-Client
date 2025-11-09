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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<MainLayout />}>
      <Route index={true} element={<Home />} />
      <Route path="all-books" element={<AllBooks />} />
      <Route path="add-books" element={<AddBooks />} />
      <Route path="my-books" element={<MyBooks />} />
    </Route>
  )
);

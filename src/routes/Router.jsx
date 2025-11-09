import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<MainLayout />}>
      <Route index={true} element={<Home />} />
    </Route>
  )
);

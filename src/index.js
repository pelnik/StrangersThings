import React from "react";
import ReactDOM from "react-dom/client";
import { Main, Posts } from "./components";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';

const container = document.getElementById("app");
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route path='posts' element={<Posts />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
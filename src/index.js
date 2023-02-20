import React from "react";
import ReactDOM from "react-dom/client";
import { Main, Posts, LoginForm, RegisterForm, Profile } from "./components";
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
      <Route path='register' element={<RegisterForm />} />
      <Route path='login' element={<LoginForm />} />
      <Route path='profile' element={<Profile />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(container);
root.render(
  <RouterProvider router={router} />
);
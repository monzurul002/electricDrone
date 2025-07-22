import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/signUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import NewsHome from "../../Home/NewsHome/NewsHome";
import SignUp from "../../Register/SignUp";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{ path: "/news/:id", element: <NewsHome></NewsHome> }],
  },
  { path: "/signUp", element: <SignUp></SignUp> },
]);

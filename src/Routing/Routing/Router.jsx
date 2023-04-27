import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";

export const Router = createBrowserRouter([
  { path: "/", element: <Layout></Layout> },
]);

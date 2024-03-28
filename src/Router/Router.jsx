import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/banner/Banner";
import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
    ],
  },
]);

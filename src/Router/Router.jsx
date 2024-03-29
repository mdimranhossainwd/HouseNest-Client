import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
    ],
  },
]);

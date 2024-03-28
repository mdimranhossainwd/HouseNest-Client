import { createBrowserRouter } from "react-router-dom";
import Header from "../shared/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);

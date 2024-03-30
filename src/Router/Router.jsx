import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";
import RoomDetailsPage from "../shared/Room/RoomDetailsPage";
import RoomReview from "../shared/Room/RoomReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/roominfo/:id",
        element: <RoomDetailsPage />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/housenest/v1/advertisement/${params.id}`
          ),
      },
      {
        path: "/addreview",
        element: <RoomReview />,
      },
    ],
  },
]);

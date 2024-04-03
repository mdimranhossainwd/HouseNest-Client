import { createBrowserRouter } from "react-router-dom";
import Profile from "../components/common/Profile";
import SignInForm from "../form/auth/SignInForm";
import SignUpForm from "../form/auth/SignUpForm";
import DashboardPages from "../pages/DashboardPages";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";
import WishlistPage from "../pages/WishlistPage";
import RoomDetailsPage from "../shared/Room/RoomDetailsPage";
import RoomReview from "../shared/Room/RoomReview";
import PrivateRouter from "./PrivateRouter";

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
        element: (
          <PrivateRouter>
            <RoomDetailsPage />
          </PrivateRouter>
        ),
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
  {
    path: "/dashboard",
    element: <DashboardPages />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInForm />,
  },
  {
    path: "/register",
    element: <SignUpForm />,
  },
]);

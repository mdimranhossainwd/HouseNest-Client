import { createBrowserRouter } from "react-router-dom";
import Property from "../components/Card/Property/Property";
import Error from "../components/Err/Error";
import Payment from "../components/Payment/Payment";
import MyPreviewPage from "../components/Review/MyPreviewPage";
import UserReview from "../components/Review/UserReview";
import AProfile from "../components/common/AProfile";
import AllReviews from "../components/common/AllReviews";
import Profile from "../components/common/Profile";
import AddProperty from "../form/AddProperty";
import MakeAnOfferForm from "../form/MakeAnOfferForm";
import UpdateForm from "../form/UpdateForm";
import SignInForm from "../form/auth/SignInForm";
import SignUpForm from "../form/auth/SignUpForm";
import AllPropertyPage from "../pages/AllPropertyPage";
import DashboardPages from "../pages/DashboardPages";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";
import WishlistPage from "../pages/WishlistPage";
import AdminProfile from "../shared/Dashboard/admin/AdminProfile";
import ManagePropertiesPage from "../shared/Dashboard/admin/ManagePropertiesPage";
import UserInfo from "../shared/Dashboard/admin/UserInfo";
import MySolePage from "../shared/Dashboard/agent/MySolePage";
import MyProperties from "../shared/Dashboard/pages/MyProperties";
import RoomDetailsPage from "../shared/Room/RoomDetailsPage";
import RoomReview from "../shared/Room/RoomReview";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
            `https://housenest-server.onrender.com/housenest/v1/advertisement/${params.id}`
          ),
      },
      {
        path: "/addreview",
        element: <RoomReview />,
      },
      {
        path: "/properties",
        element: (
          <PrivateRouter>
            <AllPropertyPage />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPages />,
    errorElement: <Error />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "brougth",
        element: <Property />,
      },
      {
        path: "addreview",
        element: <UserReview />,
      },
      {
        path: "mysold",
        element: <MySolePage />,
      },
      {
        path: "managereviews",
        element: <AllReviews />,
      },
      {
        path: "manageproperties",
        element: <ManagePropertiesPage />,
      },
      {
        path: "myreview",
        element: <MyPreviewPage />,
      },
      {
        path: "addproperty",
        element: <AddProperty />,
      },

      {
        path: "myproperties",
        element: <MyProperties />,
      },
      {
        path: "adminprofile",
        element: <AdminProfile />,
      },
      {
        path: "adminuser",
        element: <UserInfo />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },

      {
        path: "/dashboard/updateproperty/:id",
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(
            `https://housenest-server.onrender.com/housenest/api/v1/addproperty/${params.id}`
          ),
      },

      {
        path: "agentprofile",
        element: <AProfile />,
      },
      {
        path: "/dashboard/makeoffer/:id",
        element: <MakeAnOfferForm />,
        loader: ({ params }) =>
          fetch(
            `https://housenest-server.onrender.com/housenest/api/v1/wishlists/${params.id}`
          ),
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

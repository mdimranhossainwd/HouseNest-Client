import { Navigate, useLocation } from "react-router-dom";
import "../Custom.css";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, isloading } = useAuth();
  const location = useLocation();

  if (isloading) {
    return (
      <div className="flex items-center justify-center">
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate state={location.state?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRouter;

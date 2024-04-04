import { NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
import AdminMenu from "./AdminMenu";
import AgentMenu from "./AgentMenu";

const DashboardMenu = () => {
  const [role] = useRole();
  console.log(role);

  return (
    <div>
      <div className="md:w-64 min-h-screen bg-[#00aeef] text-white">
        <ul className="menu p-4 text-lg">
          <h2 className="text-5xl items-center flex font-semibold font-greatVibes ">
            HouseNest
          </h2>
          <div className="divider"></div>

          <>
            {role === "admin" && <AdminMenu />}

            <div className="divider"></div>
            <li>
              <NavLink to="brougth">Property Brougth</NavLink>
            </li>
            <li>
              <NavLink to="addreview">Add Reviews</NavLink>
            </li>

            <li>
              <NavLink to="profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="myreview">My Review</NavLink>
            </li>

            <div className="divider"></div>

            {role === "agent" && <AgentMenu />}
          </>

          {/* <>
            <li>
              <NavLink to="/dashboard/bought">Property bought</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">My Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory">
                Real Payment History
              </NavLink>
            </li>
          </> */}
          {/* shared nav links */}
          {/* <div className="divider"></div> */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;

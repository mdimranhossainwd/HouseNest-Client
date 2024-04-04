import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div>
      <div className="md:w-64 min-h-full bg-[#00aeef] text-white">
        <ul className="menu p-4 text-lg">
          <h2 className="text-5xl items-center flex font-semibold font-greatVibes ">
            HouseNest
          </h2>
          <div className="divider"></div>

          <>
            <li>
              <NavLink to="/dashboard/admin">Admin Profile</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageproperties">
                Manage Properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminuser">Manage Users</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminreviews">Manage Reviews</NavLink>
            </li>

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

            <li>
              <NavLink to="/dashboard/agent">My added properties.</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/soldproperties">
                My sold properties.
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/agentprofile">Agent Profile</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/rqproperties">
                Requested properties
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/users">All Users</NavLink>
            </li>
          </>

          <>
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
          </>
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;

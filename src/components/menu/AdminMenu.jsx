import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <li>
        <NavLink to="/dashboard/admin">Admin Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageproperties">Manage Properties</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/adminuser">Manage Users</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/adminreviews">Manage Reviews</NavLink>
      </li>
    </div>
  );
};

export default AdminMenu;
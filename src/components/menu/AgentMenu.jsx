import { NavLink } from "react-router-dom";

const AgentMenu = () => {
  return (
    <div>
      <li>
        <NavLink to="agentprofile">Agent Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addproperty">Add Property</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/myaddedproperties">My Added Properties</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mysold">My Sold Properties</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/requested">Requested Properties</NavLink>
      </li>
    </div>
  );
};

export default AgentMenu;

import { NavLink } from "react-router-dom";

const AgentMenu = () => {
  return (
    <div>
      <li>
        <NavLink to="agentprofile">Agent Profile</NavLink>
      </li>
      <li>
        <NavLink to="addproperty">Add Property</NavLink>
      </li>

      <li>
        <NavLink to="myproperties">My Added Properties</NavLink>
      </li>
      <li>
        <NavLink to="mysold">My Sold Properties</NavLink>
      </li>
    </div>
  );
};

export default AgentMenu;

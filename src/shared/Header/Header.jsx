import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const Menu = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#0c12b0]" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#0c12b0]" : "")}
        to="/service"
      >
        All Properties
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#0c12b0]" : "")}
        to="/shop"
      >
        Dashboard
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-[#0c12b0]" : "")}
        to="/contact"
      >
        Login
      </NavLink>

      {/* {user?.email ? (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink className="bg-[#F42643] p-3 flex rounded-full border ">
            <LuShoppingCart />
          </NavLink>
          <div className=" bg-white text-black px-1 text-sm font-bold rounded-full absolute right-[104px] top-14">
            {cart.length}
          </div>
        </>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
          to="/login"
        >
          Login
        </NavLink>
      )} */}
    </>
  );

  return (
    <div>
      <div className="container  text-black top-0 left-0 right-0 mx-auto">
        <div className="navbar py-5  flex items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className=" mr-28 md:mr-0 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-lg gap-2 font-medium w-52"
              >
                {Menu}
              </ul>
            </div>
            <Link hrefLang="index.html">
              <a href="#" className="text-4xl  font-greatVibes font-bold">
                House Nest
              </a>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center  text-lg gap-5 font-medium">
              {Menu}
            </ul>
          </div>

          {/* <>
            {user?.email ? (
              <>
                <div className="dropdown dropdown-end ml-28 md:ml-12">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] rounded-md p-2 text-white menu dropdown-content bg-[#3b4655]"
                  >
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <a>{user?.email}</a>
                    </li>
                    <li onClick={handleLogOut}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

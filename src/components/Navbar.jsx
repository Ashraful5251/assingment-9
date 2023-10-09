import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">
          Corporate Event Pros
        </a>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <>
              {" "}
              <button onClick={handleLogOut} className="p-2 rounded btn btn-sm">
                {" "}
                SignOut{" "}
              </button>
              <div className="relative inline-block group">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://lh3.googleusercontent.com/a/AGNmyxYoZpZr3z629at42vhbr5aWTk9mhTWhyajofPABXQ=s96-c"
                  }
                  alt="User Picture"
                  className="w-12 h-12 rounded-full"
                />
                <div className="opacity-0 bg-white p-2 rounded-md shadow-md absolute bottom-0 left-0 group-hover:opacity-100">
                  <span className="text-gray-800">
                    {user?.displayName ? user?.displayName : "No Name"}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <Link to={"/login"}>
              {" "}
              <button className="p-2 rounded btn btn-sm"> Sign In </button>
            </Link>
          )}
          {/* <li>
            <NavLink to="/register">Register</NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

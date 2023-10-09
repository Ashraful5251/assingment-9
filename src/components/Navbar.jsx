import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

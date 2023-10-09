import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default root;

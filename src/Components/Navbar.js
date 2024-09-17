import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">
          <Link to="/">MyStreamingApp</Link>
        </div>
        <div>
          <Link to="/login" className="text-gray-300 hover:text-white px-3">
            Login
          </Link>
          <Link to="/register" className="text-gray-300 hover:text-white px-3">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

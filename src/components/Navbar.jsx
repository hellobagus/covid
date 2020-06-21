import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <img
          src="./covid19.png"
          style={{ opacity: "0.7" }}
          className="m-2 ml-1"
          width="100px"
          height="20px"
          alt=""
        />
        <Link to={`//api.covid19api.com/export`} target="_blank" className="mr-3">
          Get Data as a Zip
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;

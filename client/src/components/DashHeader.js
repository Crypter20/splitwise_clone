import React from "react";
import { NavLink } from "react-router-dom";
const DashHeader = (props) => {
  return (
    <nav className="DashboardNav fixed-top">
      <NavLink to="/Dashboard">
        <h3 className="landing-name">S P L I T W I S E</h3>
      </NavLink>
      <div className="Dashfloat">
        <NavLink to="/login">
          <button
            className="logoutbtn"
            onClick={() => {
              localStorage.removeItem("jwtToken");
            }}
          >
            Log Out
          </button>
        </NavLink>
        {console.log("inside DashHeader")}
        <img
          className="profile"
          src={require("../images/personal-profile.png")}
          alt=""
          srcSet=""
        />
        <label htmlFor="">{props.user.username}</label>
      </div>
    </nav>
  );
};

export default DashHeader;

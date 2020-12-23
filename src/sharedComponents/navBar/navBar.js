import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="main-root-div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className="logo">ReactStarter(Logo)</Typography>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/aboutus">
            About Us
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;


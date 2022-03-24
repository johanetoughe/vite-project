import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <Button variant="contained" color="error" size="large" href="/">
          TABLEAU DE BORD
        </Button>
      </nav>
    </div>
  );
};
export default Navbar;

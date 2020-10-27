import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link class="navbar-brand" to="/">
         Recipes
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              
            </li>
          
          </ul>
          <Link to="/addPost" className="btn btn-dark">
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

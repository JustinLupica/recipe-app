import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
          Recipes
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to={"/"}>
                <a class="nav-link" href="/">
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/saved_recipes"}>
                <a class="nav-link" href="/saved_recipes">
                  My Recipes
                </a>
              </Link>
            </li>
          </ul>
          <SearchForm />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

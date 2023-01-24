import React from "react";
import { Link } from "react-router-dom";

const Image = require("./images/cart.png");
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1>Fabulous Fruits</h1>
      </Link>
      <Link className="nav-cart" to="/cart">
        <img alt="Cart" src={Image} width="64" />
        <span className="item-count">{sessionStorage.length}</span>
      </Link>
    </div>
  );
};

export { Navbar };

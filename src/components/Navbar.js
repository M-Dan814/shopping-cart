import React from "react";

const Image = require("./images/cart.png");
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/"><h1>Fabulous Fruits</h1></a>
      <a className="nav-cart" href="/cart">
        <img alt="Cart" src={Image} width="64" />
        <span className="item-count">{sessionStorage.length}</span>
      </a>
    </div>
  );
};

export { Navbar };

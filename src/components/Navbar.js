import React from "react";
import { Link } from "react-router-dom";

const Image = require("./images/cart.png");

const Navbar = () => {
  return (
    <header className="w-full bg-white/30 backdrop-blur-md border-b border-white/40 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold font-serif text-slate-800 hover:text-lime-700 transition"
        >
          Fabulous Fruits
        </Link>
        <Link to="/cart" className="relative group">
          <img
            alt="Shopping cart icon"
            src={Image}
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
            {sessionStorage.length}
          </span>
        </Link>
      </div>
    </header>
  );
};

export { Navbar };

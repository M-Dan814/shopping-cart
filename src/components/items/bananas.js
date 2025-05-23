import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const Image = require("../images/bananas.jpg");

const Banana = () => {
  const [left, setLeft] = useState(13);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("1");
    if (stored) {
      const obj = JSON.parse(stored);
      setLeft(13 - obj.quantity);
      setAdded(obj.quantity);
    }
  }, []);

  const addToCart = () => {
    const stored = sessionStorage.getItem("1");
    if (!stored) {
      const obj = { name: "Banana", price: 1.25, quantity: 1 };
      sessionStorage.setItem("1", JSON.stringify(obj));
      setAdded(1);
      setLeft(12);
    } else {
      const obj = JSON.parse(stored);
      obj.quantity++;
      sessionStorage.setItem("1", JSON.stringify(obj));
      setAdded((prev) => prev + 1);
      setLeft((prev) => prev - 1);
    }
  };

  const removeFromCart = () => {
    const stored = sessionStorage.getItem("1");
    if (!stored) return;

    const obj = JSON.parse(stored);
    if (obj.quantity === 1) {
      sessionStorage.removeItem("1");
      setAdded(0);
      setLeft(13);
    } else {
      obj.quantity--;
      sessionStorage.setItem("1", JSON.stringify(obj));
      setAdded((prev) => prev - 1);
      setLeft((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-10 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-cursive text-yellow-600 mb-4">
            Bananas
          </h1>
          <img
            src={Image}
            alt="Bananas"
            className="rounded-2xl shadow-lg max-w-md w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={removeFromCart}
              disabled={added === 0}
              className={`text-2xl font-bold px-5 py-3 rounded-lg transition-all ${
                added > 0
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              -
            </button>
            <span className="text-3xl font-semibold text-yellow-600">
              {added}
            </span>
            <button
              onClick={addToCart}
              disabled={left === 0}
              className={`text-2xl font-bold px-5 py-3 rounded-lg transition-all ${
                left > 0
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              +
            </button>
          </div>
          <Link
            to="/cart"
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all"
          >
            To Shopping Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Banana };

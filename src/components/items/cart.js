import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const Image = require("../images/cart.png");

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < 13; i++) {
      const stored = sessionStorage.getItem(`${i}`);
      if (stored) {
        items.push(JSON.parse(stored));
      }
    }
    setCart(items);
  }, []);

  const finish = () => {
    alert(
      "Thank you for shopping at Fabulous Fruits. Your order has been processed."
    );
    sessionStorage.clear();
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-12 items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <div className="flex-shrink-0">
          <img
            src={Image}
            alt="Shopping Cart"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <section className="w-full max-w-xl bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-green-800 text-center">
            Your Shopping Cart
          </h2>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <table className="w-full text-left border-collapse mb-6">
                <thead>
                  <tr className="border-b border-green-300">
                    <th className="pb-2 font-medium text-green-700">Item</th>
                    <th className="pb-2 font-medium text-green-700">
                      Quantity
                    </th>
                    <th className="pb-2 font-medium text-green-700">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr
                      key={`${item.name}-${idx}`}
                      className="border-b border-green-200 last:border-none"
                    >
                      <td className="py-2">{item.name}</td>
                      <td className="py-2">{item.quantity}</td>
                      <td className="py-2">${item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center text-xl font-semibold text-green-900 mb-6">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/">
                <button
                  onClick={finish}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Buy
                </button>
              </Link>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export { Cart };

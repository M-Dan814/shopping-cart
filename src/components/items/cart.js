import React from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const Image = require("../images/cart.png");

const Cart = () => {
  const cart = [];
  for (let i = 0; i < 13; i++) {
    if (sessionStorage.getItem(`${i}`) !== null) {
      cart.push(JSON.parse(sessionStorage.getItem(`${i}`)));
    }
  }

  const finish = () => {
    alert(
      "Thank you for shopping at Fabulous Fruits. Your order has been processed."
    );
    sessionStorage.clear();
  };
  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="image">
          <img src={Image} alt="Shopping Cart" height={400} width="500" />
        </div>

        <div className="total">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="final-total">
            <span className="total-head">Total: </span>
            <span>
              $
              {Math.round(
                cart.reduce(function (previousValue, currentValue) {
                  return (
                    previousValue + currentValue.quantity * currentValue.price
                  );
                }, 0) * 100
              ) / 100}
            </span>
          </div>
          <Link to="/">
            <button onClick={finish} className="cart-final">
              Buy
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Cart };

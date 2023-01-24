import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const Image = require("../images/apples.jpg");
const Apple = () => {
  const [left, setLeft] = useState(5);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("0") != null) {
      const stringed = sessionStorage.getItem("0");
      const obj = JSON.parse(stringed);
      const freq = obj.quantity;
      setLeft(left - freq);
      setAdded(added + freq);
    }
  }, []);

  const addToCart = () => {
    if (sessionStorage.getItem("0") === null) {
      const stringed = JSON.stringify({
        name: "Apple",
        price: 0.2,
        quantity: 1,
      });
      sessionStorage.setItem("0", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    } else {
      const string = sessionStorage.getItem("0");
      const obj = JSON.parse(string);
      obj.quantity++;
      const stringed = JSON.stringify(obj);
      sessionStorage.setItem("0", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    }
  };

  const removeFromCart = () => {
    const string = sessionStorage.getItem("0");
    const obj = JSON.parse(string);
    if (obj.quantity === 1) {
      sessionStorage.removeItem("0");
      setAdded(added - 1);
      setLeft(left + 1);
    } else {
      obj.quantity--;
      sessionStorage.setItem("0", JSON.stringify(obj));
      setAdded(added - 1);
      setLeft(left + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="item-cont">
        <div className="item">
          <h1>Apples</h1>
          <img src={Image} width="800" alt="apples" height={600} />
        </div>
        <div className="buttons">
          {added > 0 ? (
            <button onClick={removeFromCart}>-</button>
          ) : (
            <button disabled>-</button>
          )}
          <span>{added}</span>
          {left > 0 ? (
            <button onClick={addToCart}>+</button>
          ) : (
            <button disabled>+</button>
          )}
          <Link to="/cart">To Shopping Cart</Link>
        </div>
      </div>
    </>
  );
};

export { Apple };

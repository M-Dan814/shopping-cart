import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const Image = require("../images/grapes.jpg");
const Grapes = () => {
  const [left, setLeft] = useState(12);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("2") != null) {
      const stringed = sessionStorage.getItem("2");
      const obj = JSON.parse(stringed);
      const freq = obj.quantity;
      setLeft(left - freq);
      setAdded(added + freq);
    }
  }, []);

  const addToCart = () => {
    if (sessionStorage.getItem("2") === null) {
      const stringed = JSON.stringify({
        name: "Grapes",
        price: 0.85,
        quantity: 1,
      });
      sessionStorage.setItem("2", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    } else {
      const string = sessionStorage.getItem("2");
      const obj = JSON.parse(string);
      obj.quantity++;
      const stringed = JSON.stringify(obj);
      sessionStorage.setItem("2", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    }
  };

  const removeFromCart = () => {
    const string = sessionStorage.getItem("2");
    const obj = JSON.parse(string);
    if (obj.quantity === 1) {
      sessionStorage.removeItem("2");
      setAdded(added - 1);
      setLeft(left + 1);
    } else {
      obj.quantity--;
      sessionStorage.setItem("2", JSON.stringify(obj));
      setAdded(added - 1);
      setLeft(left + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="item-cont">
        <div className="item">
          <h1>Grapes</h1>
          <img src={Image} width="800" alt="grapes" height={600} />
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

export { Grapes };

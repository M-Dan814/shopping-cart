import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";

const Image = require("../images/pineapples.jpg");
const Pineapples = () => {
  const [left, setLeft] = useState(12);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("8") != null) {
      const stringed = sessionStorage.getItem("8");
      const obj = JSON.parse(stringed);
      const freq = obj.quantity;
      setLeft(left - freq);
      setAdded(added + freq);
    }
  }, []);

  const addToCart = () => {
    if (sessionStorage.getItem("8") === null) {
      const stringed = JSON.stringify({
        name: "Pineapples",
        price: 0.75,
        quantity: 1,
      });
      sessionStorage.setItem("8", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    } else {
      const string = sessionStorage.getItem("8");
      const obj = JSON.parse(string);
      obj.quantity++;
      const stringed = JSON.stringify(obj);
      sessionStorage.setItem("8", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    }
  };

  const removeFromCart = () => {
    const string = sessionStorage.getItem("8");
    const obj = JSON.parse(string);
    if (obj.quantity === 1) {
      sessionStorage.removeItem("8");
      setAdded(added - 1);
      setLeft(left + 1);
    } else {
      obj.quantity--;
      sessionStorage.setItem("8", JSON.stringify(obj));
      setAdded(added - 1);
      setLeft(left + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="item-cont">
        <div className="item">
          <h1>Pineapples</h1>
          <img src={Image} width="800" alt="pineapples" height={600} />
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
          <a href="/cart">To Shopping Cart</a>
        </div>
      </div>
    </>
  );
};

export { Pineapples };

import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";

const Image = require("../images/bananas.jpg");
const Banana = () => {
  const [left, setLeft] = useState(13);
  const [added, setAdded] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("1") != null) {
      const stringed = sessionStorage.getItem("1");
      const obj = JSON.parse(stringed);
      const freq = obj.quantity;
      setLeft(left - freq);
      setAdded(added + freq);
    }
  }, []);

  const addToCart = () => {
    if (sessionStorage.getItem("1") === null) {
      const stringed = JSON.stringify({
        name: "Banana",
        price: 1.25,
        quantity: 1,
      });
      sessionStorage.setItem("1", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    } else {
      const string = sessionStorage.getItem("1");
      const obj = JSON.parse(string);
      obj.quantity++;
      const stringed = JSON.stringify(obj);
      sessionStorage.setItem("1", stringed);
      setAdded(added + 1);
      setLeft(left - 1);
    }
  };

  const removeFromCart = () => {
    const string = sessionStorage.getItem("1");
    const obj = JSON.parse(string);
    if (obj.quantity === 1) {
      sessionStorage.removeItem("1");
      setAdded(added - 1);
      setLeft(left + 1);
    } else {
      obj.quantity--;
      sessionStorage.setItem("1", JSON.stringify(obj));
      setAdded(added - 1);
      setLeft(left + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="item-cont">
        <div className="item">
          <h1>Bananas</h1>
          <img src={Image} width="800" alt="bananas" height={600} />
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

export { Banana };

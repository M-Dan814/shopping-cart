import React from "react";
import { Navbar } from "./Navbar";
import { cards } from "./cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="cards">
        {cards.map((card) => {
          return (
            <a href={card.name.toLowerCase()}>
              <div className="card">
                <img src={card.img} alt={card.name} width="350" height={250} />
                <h2>{card.name}</h2>
                <span className="price">${card.price}</span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export { Home };

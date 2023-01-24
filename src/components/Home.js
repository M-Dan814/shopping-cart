import React from "react";
import { Navbar } from "./Navbar";
import { cards } from "./cards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="cards">
        {cards.map((card) => {
          return (
            <Link to={card.name.toLowerCase()}>
              <div className="card">
                <img src={card.img} alt={card.name} width="350" height={250} />
                <h2>{card.name}</h2>
                <span className="price">${card.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export { Home };

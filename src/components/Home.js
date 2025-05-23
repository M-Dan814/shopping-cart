import React from "react";
import { Navbar } from "./Navbar";
import { cards } from "./cards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-lime-50 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card) => (
            <Link key={card.name} to={card.name.toLowerCase()}>
              <div className="relative w-80 bg-white/30 backdrop-blur-md border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-4 flex flex-col items-center text-center text-slate-800 hover:scale-[1.03]">
                <img
                  src={card.img}
                  alt={card.name}
                  className="rounded-lg w-full h-56 object-cover mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{card.name}</h2>
                <span className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-full shadow-lg">
                  ${card.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { Home };

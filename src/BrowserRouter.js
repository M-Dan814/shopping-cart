import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Apple } from "./components/items/apple";
import { Banana } from "./components/items/bananas";
import { Cart } from "./components/items/cart";
import { Grapes } from "./components/items/grapes";
import { Lemons } from "./components/items/lemons";
import { Mangoes } from "./components/items/mangoes";
import { Melons } from "./components/items/melons";
import { Oranges } from "./components/items/oranges";
import { Peaches } from "./components/items/peaches";
import { Pineapples } from "./components/items/pineapples";
import { Strawberries } from "./components/items/strawberries";
import { Tomatoes } from "./components/items/tomatoes";
import { Watermelons } from "./components/items/watermelons";

const RouterSwitch = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/apples" element={<Apple />} />
        <Route path="/bananas" element={<Banana />} />
        <Route path="/grapes" element={<Grapes />} />
        <Route path="/lemons" element={<Lemons />} />
        <Route path="/mangoes" element={<Mangoes />} />
        <Route path="/melons" element={<Melons />} />
        <Route path="/oranges" element={<Oranges />} />
        <Route path="/peaches" element={<Peaches />} />
        <Route path="/pineapples" element={<Pineapples />} />
        <Route path="/strawberries" element={<Strawberries />} />
        <Route path="/tomatoes" element={<Tomatoes />} />
        <Route path="/watermelons" element={<Watermelons />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterSwitch };

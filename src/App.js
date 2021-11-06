import Header from "./components/Layout/Header";
import React from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

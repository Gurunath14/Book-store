import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Author from "./Components/Author";
import Purchase from "./Components/Purchase";
import Bookshelf from "./Components/Bookshelf";
import Avaliable from "./Components/Avaliable";
import Review from "./Components/Reviews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Author />
      <Purchase />
      <Bookshelf />
      <Avaliable />
      <Review />
    </>
  );
}

export default App;

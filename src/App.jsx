import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Author from "./Components/Author";
import Purchase from "./Components/Purchase";
import Bookshelf from "./Components/Bookshelf";
import Avaliable from "./Components/Avaliable";
import Review from "./Components/Reviews";
import { Provider } from "react-redux";
import appStore from "./StateHandler/appStrore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={appStore}>
        <Navbar />
        <Hero />
        <Author />
        <Purchase />
        <Bookshelf />
        <Avaliable />
        <Review />
      </Provider>
    </>
  );
}

export default App;

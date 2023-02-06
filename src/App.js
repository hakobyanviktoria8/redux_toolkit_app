import React from "react";
import { Carts } from "./features/carts/Carts";
import { CartsDataJson } from "./features/carts/CartsDataJson";
import { Counter } from "./features/counter/Counter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartsDataJson />

        <Counter />

        <Carts />

        <div className="footer">
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

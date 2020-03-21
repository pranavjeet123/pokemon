import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Navbar } from "./pages/navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import { useState } from "react";

import "./App.css";
import "./App.scss";
import Main_Card from "./components/__organisms/Main_card";

function App() {
  return (
    <>
      <div className="container">
        <h1>Todo</h1>
        <Main_Card />
      </div>
    </>
  );
}

export default App;

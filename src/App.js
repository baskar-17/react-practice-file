import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CreateToDo from "./components/CreateToDo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<CreateToDo />} />
      </Routes>
    </div>
  );
}

export default App;

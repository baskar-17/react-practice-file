import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;

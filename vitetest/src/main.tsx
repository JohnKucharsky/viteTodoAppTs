import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Second from "./Second";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

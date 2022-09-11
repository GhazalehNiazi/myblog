import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Articles from "./components/Articles";
import { Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



root.render(
  <React.StrictMode>
    <BrowserRouter basename='/myblog'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="articles" element={<Articles />} />
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

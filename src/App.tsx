import React from "react";
import HeroAboutMe from "./components/HeroAboutMe";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = function (): boolean {
    setShowMenu(!showMenu);
    return showMenu;
  };

  let navigate = useNavigate();
  let path = localStorage.getItem("path");
  if (path) {
    localStorage.removeItem("path");
    navigate(`../${path}`, { replace: true });
    console.log("hryyyyy");
  }

  return (
    <div className="App bg-neutral-900 ">
      <Menu setShowMenu={clickHandler} showMenu={showMenu} />
      <Navigation setShowMenu={clickHandler} showMenu={showMenu} />
      <main className="bg-neutral-700 ">
        <HeroAboutMe />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import HeroAboutMe from "./components/HeroAboutMe";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App bg-neutral-900 ">
      <Navigation />
      <main className="bg-neutral-700 ">
        <HeroAboutMe />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;

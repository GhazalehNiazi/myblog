import React from "react";
import HeroAboutMe from "./components/HeroAboutMe";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="bg-zinc-800 h-screen">
        <HeroAboutMe />
      </main>
    </div>
  );
}

export default App;

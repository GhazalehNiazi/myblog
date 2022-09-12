import React from "react";
import { Link } from "react-router-dom";
const navItems: { name: string; link: string }[] = [
  { name: "درباره‌ی من", link: "/aboutme" },
  { name: "پروژه‌ها", link: "/projects" },
  { name: "مقاله‌ها", link: "/articles" },
];

function Navigation({
  setShowMenu,
  showMenu,
}: {
  showMenu: boolean;
  setShowMenu(): boolean;
}) {
  return (
    <div
      className={`bg-neutral-800 flex justify-between justify-items-center item-center content-center  py-5 text-slate-300 border-b border-neutral-700 px-4 `}
    >
      <nav className=" flex justify-between text-m w-full px-3">
        <Link to="/" className="font-['Poppins'] tracking-widest ">
          GHAZALE NIAZI
        </Link>
        <div className="pl-3 md:hidden">
          <button className="" onClick={() => setShowMenu()}>
            <span className="text-violet-500  text-2xl align-middle ">☰</span>
          </button>
        </div>
        <div className="hidden md:flex justify-between w-8/12 px-2">
          {navItems.map((item) => (
            <button key={item.link} className="">
              <Link to={item.link}>{item.name}</Link>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

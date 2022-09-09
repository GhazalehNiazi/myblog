import React from "react";
import { Link } from "react-router-dom";

const navItems: { name: string; link: string }[] = [
  { name: "درباره‌ی من", link: "/aboutme" },
  { name: "پروژه‌ها", link: "/projects" },
  { name: "مقاله‌ها", link: "/articles" },
];
function Menu({
  setShowMenu,
  showMenu,
}: {
  showMenu: boolean;
  setShowMenu(): boolean;
}) {
  return (
    <div
      className={`h-screen bg-neutral-900 fixed left-0 w-full pt-20 px-8 ease-out-in duration-300 ${
        showMenu ? "translate-x-0 " : "translate-x-full"
      } `}
    >
      <button
        className="top-0 fixed text-slate-200 left-0 p-5 text-2xl"
        onClick={() => setShowMenu()}
      >
        <span className="text-violet-500">x</span>
      </button>
      <div className="text-slate-200 font-medium text-xl py-5 border-b-2 border-neutral-700">
        <Link to="/">غزاله نیازی</Link>
      </div>
      {navItems.map((item) => (
        <div
          key={item.link}
          className="text-slate-200 font-medium text-xl py-5 border-b-2 border-neutral-700"
        >
          <Link to={item.link}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;

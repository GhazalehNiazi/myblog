import React from "react";
import { NavLink, Link } from "react-router-dom";
const navItems: { name: string; link: string }[] = [
  { name: "درباره‌ی من", link: "/aboutme" },
  { name: "پروژه‌ها", link: "/projects" },
  { name: "مقاله‌ها", link: "/articles" },
  { name: "خانه", link: "/" },
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
      className={`bg-neutral-800 flex justify-between justify-items-center item-center content-center  py-5 text-slate-300 border-b border-neutral-700 px-10`}
    >
      <nav className=" flex justify-between text-m w-full px-3">
        <Link to="/" className="font-['Poppins'] tracking-widest mr-4 ">
          GHAZALE NIAZI
        </Link>
        <div className="pl-3 md:hidden">
          <button className="" onClick={() => setShowMenu()}>
            <span className="text-violet-500  text-2xl align-middle ">☰</span>
          </button>
        </div>

        <div className="hidden md:flex md:align-start px-2">
          {navItems.map((item) => (
            <button key={item.link} className="mr-6">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "underline decoration-violet-500" : undefined
                }
              >
                {item.name}
              </NavLink>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

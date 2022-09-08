import React from "react";

const navItems: { name: string; link: string }[] = [
  { name: "درباره‌ی من", link: "/aboutme" },
  { name: "پروژه‌ها", link: "/projects" },
  { name: "مقاله‌ها", link: "/articles" },
];

{
  /* {navItems.map((item) => (
            <a href={item.link} key={item.link} className="pr-2 font-medium">
            <span className="font-medium">{item.name}</span>
          </a>
        ))} */
}

function Navigation() {
  return (
    <div className="bg-neutral-800 flex justify-between justify-items-center item-center content-center  py-5 text-slate-300 border-b border-neutral-700 px-4">
      <nav className=" flex justify-between text-m w-full">
        <a href="/" className="font-['Poppins'] tracking-widest ">
          GHAZALE NIAZI
        </a>
        <div className="pl-3 ">
          <button className="">
            <span className="text-violet-500  text-2xl align-middle">☰</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

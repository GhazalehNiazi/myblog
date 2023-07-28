import React from "react";

const itemLists = [
  { name: "HOME" },
  { name: "WORKS" },
  { name: "ABOUT" },
  { name: "CONTACT" },
];
function MainNavigation() {
  return (
    <div className="flex alig-center justify-center w-full  absolute sticky bottom-10 ">
      <ul className="bg-violet-400 rounded-3xl flex gap-4 py-2 px-4 justify-center w-fit border-2 border-zinc-900 ">
        {itemLists.map((item) => (
          <li
            key={item.name}
            className="cursor-pointer rounded-3xl px-1 py-1 text-zinc-900 text-lg hover:bg-slate-100"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainNavigation;

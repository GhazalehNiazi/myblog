import React from "react";

const navItems: { name: string; link: string }[] = [
  { name: "درباره‌ی من", link: "/aboutme" },
  { name: "پروژه‌ها", link: "/projects" },
  { name: "مقاله‌ها", link: "/articles" },
];
function Navigation() {
  return (
    <div className="bg-zinc-900 flex justify-between justify-items-center px-3 py-5 text-slate-300 border-b-2 border-zinc-500 ">
      <nav className=" flex justify-between text-m w-full">
      <div className="pl-3">
        <button>
          <img
            className="w-6 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYlJREFUWEftmDFuwkAQRe0rRIECWpSWs+QE1ClzDgpKak6QU0TQ0kZROigSixMggbD9LXms4a/HcZhFoVnh3WX/vBnPzpAmHT+jh+R07Sf2hyTtckSnzZeD3QqUwnafiwLUz2s+ZB+jfJzO9jWAbYmaCboXKONKE5y9z2tLQTSUpJlgdAI1wSw2GclfIxidQAhGbFpJ9kYweoEwQOZLGZM3I+hGYFdX907wbgR+bY65Lc/L73xELLoh+C+QFaUsYd+MoCZMppn4Bcp6jlUZzKWh6QXrKMFoBKLqGE+K3sJKMjT2WhP0L3Bd2jQoujSQhKUaUdZEybeWkcN8dZNULvEucLsq+tnHp3o/myhEYWlVMeNB2R9r5MwE3QqUeUsVioUl0SofBhILJdeIwWgFajdGI0bLhegxtH24MTAv6z+5r1EP4m2Gi90JlK7Gdya4LTGWV9UYjEagJCJvireXoQat9hwxFkqMxqB2qnuBjKhmmLUaojHI/Mf+m7a61OxiJriv+T/ri60GnAG1B7A4DYusaQAAAABJRU5ErkJggg=="
            alt="Theme"
          />
        </button>
      </div>
        {navItems.map((item) => (
            <a href={item.link} key={item.link} className="pr-2 font-medium">
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
        <a href="/">H</a>
      </nav>
    </div>
  );
}

export default Navigation;

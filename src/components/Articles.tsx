import React, { useState } from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Article from "./Article";
function Articles() {
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = function (): boolean {
    setShowMenu(!showMenu);
    return showMenu;
  };

  return (
    <div className=" bg-neutral-800 ">
      <Menu setShowMenu={clickHandler} showMenu={showMenu} />
      <Navigation setShowMenu={clickHandler} showMenu={showMenu} />

      <div className="bg-neutral-800">
        <Article
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
        <Article
          date="۵ اسفند ۱۴۰۰"
          title="چرا اینگونه و آنگونه و چطوری که اینطوری میشه و توضیحات و کلمه و کلمه"
          genre="front-end"
        />
      </div>

      <Sidebar />
    </div>
  );
}

export default Articles;

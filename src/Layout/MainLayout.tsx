import { useState } from "react";
import { Outlet } from "react-router-dom";

import Menu from "components/Menu";
import Navigation from "components/Navigation";
import Sidebar from "components/Sidebar";

const MainLayout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = function (): boolean {
    setShowMenu(!showMenu);
    return showMenu;
  };

  return (
    <div className=" ">
      <Menu setShowMenu={clickHandler} showMenu={showMenu} />
      <Navigation setShowMenu={clickHandler} showMenu={showMenu} />
      <main className=" flex flex-col lg:flex-row lg:min-h-[91.4vh] lg:justify-between lg:flex-row-reverse">
        <Outlet />
        <Sidebar />
      </main>
    </div>
  );
};

export default MainLayout;

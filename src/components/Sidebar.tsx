import React from "react";

function Sidebar() {
  return (
    <div className="bg-neutral-900 text-slate-200 flex flex-col  justify-between p-2 align-center font-['Noto Sans Arabic'] px-4 lg:bg-neutral-700 lg:w-4/12">
      <div className="flex items-center justify-center flex-col py-16 border-b border-neutral-400">
        <h1 className="text-3xl font-semibold tracking-wider pb-4 ">
          غزاله نیازی ثابت
        </h1>
        <h5 className="text-slate-300 font-thin underline text-sm tracking-widest font-['Poppins'] decoration-violet-500/75 decoration-2">
          GhazaleNiaziSabet02@gmail.com
        </h5>
      </div>

      <div className="flex  flex-col py-16">
        <h2 className="pb-2 tracking-widest font-semibold text-medium">
          درباره‌ی من
        </h2>
        <p className="tracking-wider text-neutral-300 pb-5 font-thin">
         من غزاله‌ام و ساختن چیزا رو دوست دارم. دانشجوی مهندسی کامپیوترم
          و دارم مهارت‌های برنامه‌نویس خودمو تقویت میکنم.
        </p>
        <button className="w-fit px-10 py-1 border-violet-500 border-2">
          بیشتر
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

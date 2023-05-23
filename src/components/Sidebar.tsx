import React from "react";

function Sidebar() {
  return (
    <div className=" text-slate-200 flex flex-col  justify-between  align-center font-['Noto Sans Arabic'] px-16 lg:w-4/12 max-h-screen pb-7 sticky">
      <div className="flex  justify-center flex-col py-16 ">
        <h1 className="text-3xl font-semibold tracking-wider pb-4 ">
          غزاله نیازی ثابت
        </h1>
        <h5 className="text-slate-400   text-xl tracking-widest   ">
         تهران, ۲۰ سال
        </h5>
      </div>

      <div className="flex gap-2 flex-col py-16">
        <h2 className="pb-4 text-2xl tracking-widest font-semibold text-medium">
          درباره‌ی من
        </h2>
        <p className="tracking-wider text-neutral-300 pb-5 font-thin text-xl">
         من غزاله‌ام و ساختن چیزا رو دوست دارم. دانشجوی مهندسی کامپیوترم
          و دارم مهارت‌های برنامه‌نویس خودمو تقویت میکنم.
        </p>
        <button className="w-fit px-14 py-3 bg-[#241E4D] text-lg rounded-2xl">
          بیشتر
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

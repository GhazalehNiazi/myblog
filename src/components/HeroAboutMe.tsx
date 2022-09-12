import React from "react";

function HeroAboutMe() {
  return (
    <div className=" mt-10 p-4 text-slate-100 bg-neutral-900/75 lg:max-h-min lg:mx-12  lg:grow lg:justify-self-center lg:self-start">
      <div className="flex items-center justify-center flex-col border-b border-neutral-500 pb-14">
        <h1 className="text-3xl  font-medium py-5">درباره‌ی این سایت</h1>
        <p className="text-md font-thin tracking-wider flex items-center justify-center text-center text-slate-100">
          زیبا. ریسپانسیو. استاتیک.
          <br></br>
          نوشته شده با ریکت و جاوااسکریپ مدرن
        </p>
      </div>
      <div className="py-14">
        <p className="tracking-wider pb-5 font-normal text-slate-300">
          سلام به وبسایت من خوش اومدین. شما بیشتر
          <a className="text-slate-200 underline decoration-violet-300/75 decoration-3 cursor-pointer hover:text-violet-500">
            {" "}
            درباره‌ی من{" "}
          </a>
          رو بخونید یا حتی میتونید
          <a className="text-slate-3 cursor-pointer00 underline decoration-violet-300/75 decoration-3 cursor-pointer cursor-pointer hover:text-violet-500">
            {" "}
            رزومه{" "}
          </a>
          و
          <a className="text-slate-3 cursor-pointer00 underline decoration-violet-300/75 decoration-3 cursor-pointer cursor-pointer hover:text-violet-500">
            {" "}
            مقالات{" "}
          </a>
          منو چک کنید.
          <br></br>
          سورس سایت رو میتونید
          <a className="text-slate-3 cursor-pointer00 underline decoration-violet-300/75 decoration-3 cursor-pointer cursor-pointer hover:text-violet-500">
            {" "}
            اینجا{" "}
          </a>
          پیدا کنید
        </p>
      </div>
    </div>
  );
}

export default HeroAboutMe;

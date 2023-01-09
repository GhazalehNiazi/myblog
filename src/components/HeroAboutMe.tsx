import React from "react";
import { Link } from "react-router-dom";
import devlopmentSvg from "../assets/development.svg";

function HeroAboutMe() {
  return (
    <div className=" mt-10 py-6 px-16 text-slate-10 bg-[#1A191E] rounded-3xl lg:max-h-min lg:mx-12  lg:grow lg:justify-self-center lg:self-start">
      <div className="flex  flex-col border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-medium py-5 text-slate-300">
          درباره‌ی این سایت
        </h1>
        <p className="text-xl  tracking-wider flex text-slate-400 leading-8">
          زیبا. ریسپانسیو. استاتیک.
          <br></br>
          نوشته شده با ریکت و جاوااسکریپ مدرن
        </p>
      </div>
      <div className="py-10">
        <p className="tracking-wider leading-8  font-normal text-slate-300 text-xl">
          سلام به وبسایت من خوش اومدین.
          <br></br>
          {" "} برای آشنایی بیشتر با من میتونید {" "}
          <Link
            to="/aboutme"
            className="text-slate-200 underline decoration-violet-300/75 decoration-3 cursor-pointer hover:text-violet-500"
          >
            {" "}
            {" "}  درباره‌ی من{" "}
          </Link>
          {" "} رو بخونید و حتی میتونید  {" "}
          <Link
            to="/resume"
            className="text-slate-3 cursor-pointer00 underline decoration-violet-300/75 decoration-3 cursor-pointer cursor-pointer hover:text-violet-500"
          >
            {" "}
            {" "}  رزومه{" "}
          </Link>
          {" "}      و {" "}
          <Link
            to="/articles"
            className="text-slate-3 cursor-pointer00 underline decoration-violet-300/75 decoration-3 cursor-pointer cursor-pointer hover:text-violet-500"
          >
            {" "}
            {" "}   مقالات{" "}
          </Link>
          {" "}      منو چک کنید. {" "}
          <br></br>
          {" "}   سورس سایت رو میتونید {" "}
          <a
            href="https://github.com/GhazalehNiazi/myblog"
            target={"_blank"}
            className="text-slate-3 cursor-pointer00 underline decoration-violet-300/75 decoration-3 cursor-pointer cursor-pointer hover:text-violet-500"
          >
            {" "}
            {" "}     اینجا{" "}
          </a>
          {" "}    پیدا کنید {" "}
        </p>
        <div className="flex w-full justify-end ">
          <img src={devlopmentSvg} alt="development" className="self-end" />
        </div>
      </div>
    </div>
  );
}

export default HeroAboutMe;

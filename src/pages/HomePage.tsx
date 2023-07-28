import { SunIcon } from "@heroicons/react/24/outline";
import bg from "../assets/hero-gradient@2x.webp";
// bg-gradient-to-r from-violet-900 from-10%  to-zinc-900 to-90%
function HomePage() {
  return (
    <div className="bg-zinc-900">
      <div className="min-h-screen p-4">
        <img
          src={bg}
          alt="hey"
          className="absolute -top-80 -right-60  h-full w-full"
        />
        <div className="w-fit flex text-xl ">
          <button className="z-10 w-full bg-violet-400 px-3 py-2 rounded-3xl flex flex-row-reverse items-center gap-2">
            <span className="shrink-0 ml-3">light mode</span>{" "}
            <SunIcon
              width={25}
              className="w-fit shrink-0 text-slate-900 bg-slate-100 rounded-3xl p-2"
            />
          </button>
        </div>
        <div>
          <div className="mt-20 text-6xl flex flex-col leading-sung font-extrabold">
            <span className="z-10 text-zinc-100 "> غزاله </span>
            <span className="z-10 text-violet-400"> نیازی ثابت</span>
          </div>
          <div className="text-3xl text-zinc-100 my-10">
            توسعه‌دهنده فرانت‌اند ساکن تهران.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

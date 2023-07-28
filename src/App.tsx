import { FC } from "react";
import HomePage from "pages/HomePage";
import MainNavigation from "components/MainNavigation";
const App: FC = () => {
  return (
    <div className="bg-zinc-900">
      <HomePage />
      <div className="bg-violet-400 mt-0">
        <div className="h-20 rounded-b-[42px] bg-zinc-900"></div>
        <div className="overflow-hidden py-6">
          <div className="text-8xl animate-cssmarquee flex gap-6 translate-x-full w-full ">
            <div> ggg </div>
            <div>tgjigje</div>
            <div>knvgioenv</div>
          </div>
        </div>
        <div className="h-20 rounded-t-[42px] bg-zinc-900"></div>
      </div>
      <MainNavigation />
    </div>
  );
};

export default App;

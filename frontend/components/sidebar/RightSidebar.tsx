import { LucidePhone } from "lucide-react";
import { Button } from "../ui/button";
import HeroCube from "../HeroCube";
import NavBar from "../NavBar";
const RightSidebar = () => {
  return (
    <div className="w-full h-full flex flex-col py-10 px-16">
      {/* Navigation bar */}
      <div className="w-full h-fit flex justify-between items-center">
        <NavBar />
        <div className="flex-none flex gap-2 font-semibold text-destructive">
          <LucidePhone strokeWidth={2} />
          Schedule a Call
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-auto items-center">
        {/* Quotes */}
        <div className="flex-1 flex flex-col gap-4 font-semibold">
          <p className="text-xl">Hi There,</p>
          <p className="text-8xl">I am Minh</p>
          <p className="text-6xl">I am a data scientist</p>
          <p className="text-4xl">
            If I have enough data, I can do everything!
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-white bg-[#157145]">
              Ask Me How
            </Button>
          </div>
        </div>
        {/* 3D cube */}
        <div className="flex-1">{/* <HeroCube /> */}</div>
      </div>
      {/* Contact */}
      <div className="h-fit flex justify-evenly w-2/3 text-sm">
        <div className="w-full h-full flex flex-col items-start justify-center">
          <div className="font-semibold">Email:</div>
          <div>quangminh0512@icloud.com</div>
        </div>
        <div className="w-full h-full flex flex-col items-start justify-center">
          <div className="font-semibold">Phone:</div>
          <div>705 790 2752</div>
        </div>
        <div className="w-full h-full flex flex-col items-start justify-center">
          <div className="font-semibold">Location:</div>
          <div>Open to Relocation | Canada</div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

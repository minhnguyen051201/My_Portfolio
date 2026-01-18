import { Github, Linkedin, Youtube, House } from "lucide-react";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <aside className="flex flex-col justify-between border-r-2 px-6 pt-10 pb-16 opacity-90">
      <div className="font-heading text-2xl flex justify-center">
        <Link href="/">
          {" "}
          <House size={35} strokeWidth={2.5} />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-8 text-[#474747]">
        <Github size={30} />
        <Linkedin size={30} />
        <Youtube size={30} />
      </div>
    </aside>
  );
};

export default LeftSidebar;

import { Github } from "lucide-react";

const LeftSidebar = () => {
  return (
    <aside className="flex flex-col justify-between align-center border-r-4 px-6 py-8">
      <div className="font-heading text-2xl font-semibold">
        Stu<span className="text-green-600">art</span>
      </div>
      <div className="flex flex-col justify-between align-center">
        <div>
          <Github />
        </div>
        <div>Github</div>
        <div>Youtube</div>
      </div>
    </aside>
  );
};

export default LeftSidebar;

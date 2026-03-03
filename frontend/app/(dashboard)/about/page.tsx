"use client";
import { Button } from "@/components/ui/button";
import ScrollToSectionButton from "@/components/ScrollToSectionButton";
import { CircleCheckBig } from "lucide-react";
import Work from "@/components/about/Work";
import { CircleArrowDown } from "lucide-react";
const page = () => {
  const skills: string[] = [
    "SQL: CTE, window functions",
    "Big Data tools: PySpark, HDFS",
    "Cloud: S3, EC2, DataBrick",
    "Developer tools: Git, Docker",
  ];
  const personality: string[] = [
    "Sytem thinker",
    "Detailed-obsessed",
    "Performance-minded",
    "Collaborative but independent",
  ];
  return (
    <div className="flex flex-col size-full py-20 space-y-20">
      {/* About summary */}
      <section id="summary" className="flex size-full gap-16">
        <div className="flex-1 flex flex-col gap-8 justify-center size-full">
          <h1 className="text-4xl font-semibold">Junior Data Engineer</h1>
          <p className="text-2xl italic">
            Messy data <span className="text-destructive">in</span>. Order{" "}
            <span className="text-primary">out</span>.
          </p>
          <p className="text-lg border-l-4 border-primary px-2">
            I design systems that quietly guide data from chaos to clarity -
            reliable, scalable, and built to support decisions. When dashboard
            load instantly, the work is already done.
          </p>

          <div className="flex">
            <div className="flex-1 flex flex-col gap-4">
              {skills.map((s, i) => {
                return (
                  <div key={i} className="flex gap-4">
                    <CircleCheckBig color="#32de8a" />
                    <p className="">{s}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {personality.map((p, i) => {
                return (
                  <div className="flex gap-4" key={i}>
                    <CircleCheckBig color="#32de8a" />
                    <p className="" key={i}>
                      {p}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-6">
            <Button className="bg-primary">Explore me</Button>
            <Button>Contact me</Button>
          </div>
        </div>
        <div className="size-full flex-1 border-2"></div>
      </section>

      {/* Next Button */}
      <div className="flex justify-center">
        <ScrollToSectionButton toId="how-i-work">
          <button className="flex items-center">
            <CircleArrowDown size={40} color="#7a7a7a" />
          </button>
        </ScrollToSectionButton>
      </div>

      {/* How I work */}
      <section id="how-i-work" className="">
        <Work />
      </section>
    </div>
  );
};

export default page;

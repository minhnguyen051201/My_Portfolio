"use client";
import { StepCard } from "./StepsCard";

const Work = () => {
  return (
    <div className="flex flex-col size-full gap-10">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-md font-bold">My data engineering lifecycle</p>
        <p className="text-2xl">How I work</p>
        <p className="text-sm">Structured, repetitive, and automated</p>
      </div>
      <div className="size-full flex gap-4">
        <StepCard />
        <StepCard />
        <StepCard />
        <StepCard />
        <StepCard />
      </div>
    </div>
  );
};

export default Work;

"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

type WorkFlows = {
  id: string;
  title: string;
  description: string;
  src: string;
};

const data_engineer_workflow: WorkFlows[] = [
  {
    id: "phase 1",
    title: "Strategy Alignment",
    description:
      "Define business goals, KPIs, data sources, and technical requirements to ensure the data platform delivers measurable impact.",
    src: "/workflows/strategy_alignment.jpg",
  },

  {
    id: "phase 2",
    title: "Architecture Design",
    description:
      "Design scalable data architecture, schemas, and governance standards to support reliable and efficient analytics.",
    src: "/workflows/architecture_design.jpeg",
  },
  {
    id: "phase 3",
    title: "Pipeline Development",
    description:
      "Build and automate ingestion, transformation, and orchestration pipelines to ensure consistent and repeatable data processing.",
    src: "/workflows/pipeline_development.png",
  },
  {
    id: "phase 4",
    title: "Quality Assurance",
    description:
      "Implement validation, monitoring, and alerting systems to maintain accuracy, resilience, and SLA compliance.",
    src: "/workflows/quality_assurance.jpg",
  },
  {
    id: "phase 5",
    title: "Scaling Optimization",
    description:
      "Continuously optimize performance, control costs, and scale infrastructure to support growing data demands.",
    src: "/workflows/scaling_optimization.jpg",
  },
];

export function StepCard() {
  return (
    <div className="size-full flex gap-4">
      {data_engineer_workflow.map((workflow) => {
        return (
          <Card key={workflow.id} className="flex-1 h-full pt-0">
            <div className="relative w-full h-60 border-2">
              <Image
                src={workflow.src}
                alt="workflow image"
                fill
                className="object-cover"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle>{workflow.title}</CardTitle>
              <CardDescription>{workflow.description}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}

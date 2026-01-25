"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Category = "Aws" | "Coursera" | "Georgian";

type Cert = {
  id: string;
  title: string;
  pdf: string;
  category: Category;
  skills: string;
  summary1: string;
  summary2: string;
};

const CERTS: Cert[] = [
  {
    id: "aws-1",
    title: "AWS Cloud Foundations",
    pdf: "/certificates/aws/AWS_Cloud_Foundation.pdf",
    category: "Aws",
    skills: "AWS, EC2, S3, IAM",
    summary1: "Deployed and manage core AWS clouf services",
    summary2: "Designed secure and cost-efficient cloud solutions",
  },
  {
    id: "aws-2",
    title: "AWS ML Foundations",
    pdf: "/certificates/aws/AWS_Machine_Learning_Foundation.pdf",
    category: "Aws",
    skills:
      "ML, Feature Engineering, Model Training, Model Evaluation, AWS SageMaker",
    summary1: "Understand end-to-end ML workflows",
    summary2: "Apply AWS-managed services for scalable ML solutions",
  },
  {
    id: "co-1",
    category: "Coursera",
    title: "Big Data Modeling and Management Systems",
    pdf: "/certificates/coursera/Coursera_Modeling_Data_Management_Systems.pdf",
    skills:
      "Data Modeling, Relational Databases, Dimensional Modeling, SQL, Schema Design, Data Management, Normalization, Indexing",
    summary1: "Designed efficient data models for large-scale data systems",
    summary2:
      "Applied database design principles to support analytics and performance",
  },
  {
    id: "co-2",
    category: "Coursera",
    title: "Python for Data Science, AI & Development",
    pdf: "/certificates/coursera/Coursera_Python_For_Data_Science.pdf",
    skills:
      "Python, Pandas, NumPy, Data Structures, Data Cleaning, Data Analysis, Jupyter",
    summary1: "Used Python to analyze and manipulate data",
    summary2: "Built a strong foundation for data science workflows",
  },
  {
    id: "co-3",
    category: "Coursera",
    title: "What is Data Science?",
    pdf: "/certificates/coursera/Coursera_What_Is_Data_Science.pdf",
    skills:
      "Data Science Concepts, Data Analysis, Business Understanding, Data-Driven Thinking",
    summary1: "Gained a clear overview of the data science lifecycle",
    summary2: "Connected data science techniques to real business problems",
  },
  {
    id: "co-4",
    category: "Coursera",
    title: "Data Science Math Skills",
    pdf: "/certificates/coursera/Coursera_Data_Science_Math_Skills.pdf",
    skills:
      "Linear Algebra, Probability, Statistics, Optimization, Mathematical Reasoning",
    summary1: "Strengthened mathematical foundations for data science",
    summary2: "Applied math concepts to machine learning and analytics",
  },
  {
    id: "co-5",
    category: "Coursera",
    title: "Introduction to Data Science in Python",
    pdf: "/certificates/coursera/Coursera_Data_Science_with_Python.pdf",
    skills: "Python, Pandas, Data Wrangling, Data Analysis, CSV & DataFrames",
    summary1: "Performed real-world data analysis using Python",
    summary2: "Processes and transformed structured datasets",
  },
  {
    id: "co-6",
    category: "Coursera",
    title: "Introduction to Big Data",
    pdf: "/certificates/coursera/Coursera_Introduction_Big_Data.pdf",
    skills:
      "Big Data Concepts, Distributed Systems, Hadoop, Spark, Data Pipelines",
    summary1: "Understood big data architectures and ecosystems",
    summary2: "Leaned how large-scale data is stored and processed",
  },
];

const TABS: { key: Category; label: string }[] = [
  { key: "Aws", label: "AWS" },
  { key: "Coursera", label: "Coursera" },
];

const Page = () => {
  const [active, setActive] = useState<Category>("Aws");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Cert | null>(null);
  const filtered = useMemo(
    () => CERTS.filter((c) => c.category === active),
    [active],
  );
  const onViewPdf = (cert: Cert) => {
    setSelected(cert);
    setOpen(true);
  };

  return (
    <div className="size-full flex flex-col justify-start items-center py-16 gap-8">
      {/* Carousel Categories */}
      <div className="flex-0 items-center gap-2 rounded-xl p-1 backdrop-blur">
        {TABS.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={[
                "px-4 py-2 rounded-lg text-sm font-medium transition",
                isActive
                  ? "bg-secondary border  text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {/* Carousel */}
      <div className="flex-1 w-full mt-8  flex items-center justify-center">
        <Carousel
          opts={{ align: "start" }}
          className="w-full "
          key={active} // reset carousel when switching tabs
        >
          <CarouselContent className="-ml-4 w-full ">
            {filtered.map((cert) => (
              <CarouselItem key={cert.id} className="pl-4 basis-1/3">
                {/* Card */}
                {/* Adjust the height of the card  */}
                <Card className="w-full h-85 max-w-sm mx-auto flex flex-col">
                  <CardHeader className="shrink-0">
                    <CardTitle>{cert.category}</CardTitle>
                    <CardDescription>{cert.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-scroll">
                    <ul className="grid gap-2 text-sm">
                      <li className="flex gap-2">
                        <ChevronRightIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <span>Skills: {cert.skills}</span>
                      </li>
                      <li className="flex gap-2">
                        <ChevronRightIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <span>{cert.summary1}</span>
                      </li>
                      <li className="flex gap-2">
                        <ChevronRightIcon className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <span>{cert.summary2}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="shrink-0">
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => onViewPdf(cert)}
                    >
                      View PDF
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-10" />
          <CarouselNext className="-right-10" />
        </Carousel>

        {filtered.length === 0 && (
          <div className="mt-3 text-sm text-muted-foreground">
            No certificates in this category yet.
          </div>
        )}
      </div>

      {/* PDF Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selected?.title ?? "Certificate"}</DialogTitle>
          </DialogHeader>

          <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-white/10">
            {selected?.pdf ? (
              <iframe
                src={selected.pdf}
                className="w-full h-full"
                title={selected.title}
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;

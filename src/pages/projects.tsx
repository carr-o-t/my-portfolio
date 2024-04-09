import EntryAndExit from "@/components/EntryAndExit";
import Projects from "@/components/Projects";
import { FC } from "react";

interface projectsProps {}

const projects: FC<projectsProps> = ({}) => {
  return (
    // <EntryAndExit>
    <div className="min-h-screen">
      <Projects />
    </div>
    // </EntryAndExit>
  );
};

export default projects;

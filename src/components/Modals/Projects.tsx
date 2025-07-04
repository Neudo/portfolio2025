import React from "react";
import { works } from "@/data/works";
import WorkCard from "../WorkCard";

export default function Projects() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {works.map((work, index) => (
        <WorkCard key={index} {...work} index={index} style={"modal"} />
      ))}
    </div>
  );
}

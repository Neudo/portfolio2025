import { createFileRoute } from "@tanstack/react-router";
import { works } from "@/data/works";
import WorkCard from "@/components/WorkCard";

export const Route = createFileRoute("/works/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mt-[190px] md:mt-[290px] pb-[100px] px-4 mx-auto">
      <h1 className="text-3xl mb-10">Projets sélectionnés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} index={index} />
        ))}
      </div>
    </div>
  );
}

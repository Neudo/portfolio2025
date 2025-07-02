import { createFileRoute } from "@tanstack/react-router";
import { works } from "@/data/works";
import WorkCard from "@/components/WorkCard";

export const Route = createFileRoute("/works/")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log(works);
  return (
    <div className="mt-[90px] px-4">
      <h1 className="text-3xl mb-10">Projets sélectionnés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </div>
  );
}

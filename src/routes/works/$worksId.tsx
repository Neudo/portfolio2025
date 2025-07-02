import { createFileRoute } from "@tanstack/react-router";
import Bounded from "@/components/Bounded";
import { works } from "@/data/works";

export const Route = createFileRoute("/works/$worksId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { worksId } = Route.useParams();

  // Find the work by matching the slug from the URL
  const work = works.find((w) => w.url === `/works/${worksId}`);

  if (!work) {
    return (
      <Bounded>
        <div className="flex flex-col justify-center items-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-8">Projet non trouvé</p>
          <a
            href="/works"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Retour aux projets
          </a>
        </div>
      </Bounded>
    );
  }

  return (
    <Bounded>
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{work.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{work.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {work.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {work.categories[0]}
            </span>
          </div>
        </header>

        {work.preview && (
          <div className="mb-8">
            <img
              src={work.preview}
              alt={work.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none mb-8">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {work.content}
          </div>
        </div>

        <footer className="pt-8 border-t border-gray-700">
          <a
            href="/works"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            ← Retour aux projets
          </a>
        </footer>
      </article>
    </Bounded>
  );
}

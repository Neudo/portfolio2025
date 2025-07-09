import { createFileRoute } from "@tanstack/react-router";
import Bounded from "@/components/Bounded";
import { works } from "@/data/works";
import { motion } from "motion/react";

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
      <article className="mx-auto px-4 py-8">
        {work.preview && (
          <div className="relative mb-4">
            <div className="overlay w-full h-[65vh]">
              <img
                src={work.preview}
                alt={work.title}
                className="w-full object-cover rounded-lg h-full"
              />
              <header className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {work.title}
                </motion.h1>
                <p className="text-lg text-gray-300 mb-6 text-center px-4 max-w-3xl">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2 md:mb-6">
                  {work.tags.map((tag: string, index: number) => (
                    <motion.span
                      key={index}
                      className="bg-black  px-3 py-1 rounded-full text-sm text-slate-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="">
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm text-slate-200">
                    {work.categories[0]}
                  </span>
                </div>
              </header>
            </div>
          </div>
        )}
        <div className="prose prose-invert my-8 max-w-4xl mx-auto">
          {work.presentation && (
            <div className="mb-6">
              <h2 className="text-2xl mb-4">Présentation du projet</h2>
              <p className="mb-6">{work.presentation}</p>
            </div>
          )}
          {work.goal && (
            <div className="mb-6">
              <h2 className="text-2xl mb-4">Objectif</h2>
              <p className="mb-6">{work.goal}</p>
            </div>
          )}
        </div>
        <footer className="pt-8 border-t border-gray-700">
          <a
            href="/works"
            className="inline-flex items-center transition-colors"
          >
            ← Retour aux projets
          </a>
        </footer>
      </article>
    </Bounded>
  );
}

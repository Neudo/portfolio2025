import imageQuentin from "@/../public/images/quentin-img.jpg";
import Cta from "./layout/ui/Cta";
import { useModalStore } from "@/stores/modalStore";

export default function Hero() {
  const { setExperienceStarted, experienceStarted } = useModalStore();
  const startExperience = () => {
    setExperienceStarted(true);
  };

  return (
    <div
      className={`bg-green-950 text-white p-4 md:p-16 h-full flex items-end l-0 w-full absolute transition-all duration-500 ease-in-out ${experienceStarted ? "top-[-100%]" : "top-0"} left-0 z-20`}
    >
      <div className="flex flex-col w-full mx-auto h-full items-center justify-center">
        <div className="max-w-[1410px] mx-auto w-full flex items-center">
          <div className="flex w-full justify-center flex-col h-full pr-4">
            <span className="italic ml-2">Disponible immédiatement</span>
            <h1 className="text-5xl font-chillax-bold mb-4">
              Développeur Web & Mobile
            </h1>
            <p className="text-lg mb-6">
              Spécialiste PHP, Wordpress, React, React Native & Node.js sur
              Paris.
            </p>
            <div className="flex flex-wrap gap-x-2">
              <Cta
                text="Télécharger mon CV"
                download
                href="/public/quentin-bassalair-cv.pdf"
              />
              <Cta
                text="Découvrir"
                variant="outline"
                onClick={startExperience}
                classes="animate-bounce delay-anim"
              />
            </div>
          </div>
          <div>
            <img
              className="rounded-sm hidden sm:block"
              src={imageQuentin}
              alt="Photo de Quentin, Développeur web"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import imageQuentin from "@/../public/images/quentin-img.jpg";
import Cta from "./layout/ui/Cta";
import { useModalStore } from "@/stores/modalStore";
import { motion } from "motion/react";

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
            <motion.span
              className="italic ml-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Disponible immédiatement
            </motion.span>
            <motion.h1
              className="text-5xl font-chillax-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Développeur Web & Mobile
            </motion.h1>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Spécialiste PHP, Wordpress, React, React Native & Node.js sur
              Paris.
            </motion.p>
            <div className="flex flex-wrap gap-x-2">
              <Cta
                text="Télécharger mon CV"
                download
                href="/quentin-bassalair-cv.pdf"
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
            <motion.img
              className="rounded-sm hidden sm:block shadow-lg"
              src={imageQuentin}
              alt="Photo de Quentin, Développeur web"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

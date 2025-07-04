import imageQuentin from "@/../public/images/quentin-img.jpg";
import Cta from "./layout/ui/Cta";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-green-950 text-white p-4 md:p-16 min-h-[90svh] flex items-end l-0 w-full relative top-0 left-0 z-20">
      <div className="flex flex-col w-full mx-auto h-full ">
        <div className="max-w-[1410px] mx-auto w-full flex items-center">
          <div className="flex w-full justify-center flex-col h-full">
            <span className="italic ml-2">Disponible immédiatement</span>
            <h1 className="text-5xl font-chillax-bold mb-4">
              Développeur Web & Mobile
            </h1>
            <p className="text-lg mb-6">
              Spécialiste PHP, Wordpress, React, React Native & Node.js
            </p>
            <div className="flex flex-wrap gap-x-2">
              <Cta text="Télécharger mon CV" download />
              <Cta text="En savoir plus" variant="outline" />
            </div>
          </div>
          <div>
            <img src={imageQuentin} alt="Photo de Quentin, Développeur web" />
          </div>
        </div>
        <ArrowDown className="mx-auto animate-bounce" />
      </div>
    </div>
  );
}

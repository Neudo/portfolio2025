import { useModalStore } from "@/stores/modalStore";
import Lottie from "react-lottie";
import scroll from "@/lotties/scroll.json";
import touch from "@/lotties/touch.json";

export default function Intro() {
  const { experienceStarted, setExperienceStarted } = useModalStore();

  return (
    <div
      className={`absolute inset-0 z-[39] flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-slate-600/60 ${experienceStarted ? "translate-y-[-100%]" : "translate-y-0"}`}
    >
      <div className="flex items-center gap-4 flex-wrap px-4 pt-20 overflow-auto">
        <div className="bg-slate-200/20 p-4 rounded-md flex  items-center justify-center flex-col max-w-[400px] mx-auto">
          <h2 className="text-white text-2xl mb-4">
            Faites défiler pour explorer l'expérience 3D
          </h2>
          <p className="text-white">
            Faites défiler afin d'avancer ou de revenir en arrière.
          </p>

          <div className="md:w-20 w-14">
            <Lottie
              options={{ loop: true, autoplay: true, animationData: scroll }}
            />
          </div>
        </div>

        <div className="bg-slate-200/20 p-4 rounded-md flex items-center justify-center flex-col max-w-[400px] mx-auto">
          <h2 className="text-white text-2xl mb-4">
            Cliquer sur les panneaux textuels
          </h2>
          <p className="text-white">
            Cliquez sur les sections pour ouvrir des informations détaillées.
          </p>

          <div className="md:w-50 w-28">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: touch,
              }}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setExperienceStarted(true)}
        className="bg-slate-200 px-4 py-2 my-4 rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-color duration-300 ease-in-out"
      >
        Compris !
      </button>
    </div>
  );
}

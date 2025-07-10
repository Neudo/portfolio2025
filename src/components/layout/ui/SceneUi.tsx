import { Info, Moon, Sun } from "lucide-react";
import { useModalStore } from "@/stores/modalStore";
import Credits from "@/components/Modals/Credits";

export default function SceneUi() {
  const { setTheme, openModal, theme } = useModalStore();
  return (
    <div className="fixed md:top-4 md:right-4 md:bottom-[unset] bottom-4 right-4 z-30 flex gap-2">
      <button
        className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTheme(theme === "day" ? "night" : "day")}
      >
        {theme === "day" ? <Sun /> : <Moon />}
      </button>
      <button
        className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer"
        onClick={() => openModal("Informations", <Credits />)}
      >
        <Info />
      </button>
    </div>
  );
}

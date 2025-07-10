import { Info, Moon, Sun } from "lucide-react";
import { useModalStore } from "@/stores/modalStore";

export default function SceneUi() {
  const { setTheme } = useModalStore();
  return (
    <div className="fixed top-4 right-4 z-30 flex gap-2">
      <button
        className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTheme("day")}
      >
        <Sun />
      </button>
      <button
        className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTheme("night")}
      >
        <Moon />
      </button>
      <button className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer">
        <Info />
      </button>
    </div>
  );
}

import { useProgress } from "@react-three/drei";

export default function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <div
      className={`absolute inset-0 bg-[#052E15] transition-all duration-1000 ease-in-out flex items-center justify-center z-[999] ${progress < 100 ? "translate-y-0" : "translate-y-[-100%]"} text-white`}
    >
      <div className="text-center h-full flex-col flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white mb-4 mx-auto"></div>
        <h2 className="text-2xl font-bold mb-2 animate-pulse">Chargement...</h2>
        <p className="text-blue-200">Préparation de l'expérience 3D</p>
        <p className="text-blue-200">{progress.toFixed(2)}%</p>
      </div>
    </div>
  );
}

import {
  BookCopy,
  Handshake,
  Info,
  Moon,
  PencilRuler,
  Sun,
  User,
} from "lucide-react";
import { useModalStore } from "@/stores/modalStore";
import Credits from "@/components/Modals/Credits";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useGtag } from "@/hooks/useGtag";

export default function SceneUi() {
  const {
    setTheme,
    openModal,
    theme,
    setFromUiScrollProgress,
    experienceStarted,
  } = useModalStore();
  
  const { trackThemeChange, trackModalOpen, trackNavigation } = useGtag();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (experienceStarted) {
      setStartAnimation(true);
    }
  }, [experienceStarted]);
  return (
    <>
      <div className="fixed top-2 right-2 md:top-4 md:right-4 z-30 flex gap-2">
        <motion.button
          whileTap={{ scale: 1.3 }}
          initial={{ y: 0 }}
          whileInView={{ y: startAnimation ? 0 : -80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-color duration-300 ease-in-out"
          onClick={() => {
            const newTheme = theme === "day" ? "night" : "day";
            setTheme(newTheme);
            trackThemeChange(newTheme);
          }}
        >
          {theme === "day" ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        <motion.button
          whileTap={{ scale: 1.3 }}
          initial={{ y: 0 }}
          whileInView={{ y: startAnimation ? 0 : -80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-all duration-300 ease-in-out"
          onClick={() => {
            openModal("Informations", <Credits />);
            trackModalOpen("Informations");
          }}
        >
          <Info size={18} />
        </motion.button>
      </div>
      <motion.div
        className="fixed w-full bottom-2 flex justify-center flex-wrap gap-x-4 gap-y-2 left-2 z-30"
        initial={{ y: 60 }}
        whileInView={{ y: startAnimation ? 0 : 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {/* <div className="h-2 w-[50vw] left-[20vw] bg-slate-200 absolute top-1/2 -translate-y-1/2  z-[-1]"></div> */}
        <motion.button
          whileTap={{ scale: 2.5 }}
          className="bg-slate-200 p-4  rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-all duration-300 ease-in-out"
          onClick={() => {
            setFromUiScrollProgress(0.12);
            trackNavigation('About', 0.12);
          }}
        >
          <User size={20} />
        </motion.button>
        <motion.button
          whileTap={{ scale: 2.5 }}
          className="bg-slate-200 p-4 rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-all duration-300 ease-in-out"
          onClick={() => {
            setFromUiScrollProgress(0.73);
            trackNavigation('Skills', 0.73);
          }}
        >
          <PencilRuler size={20} />
        </motion.button>
        <motion.button
          whileTap={{ scale: 2.5 }}
          className="bg-slate-200 p-4 rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-all duration-300 ease-in-out"
          onClick={() => {
            setFromUiScrollProgress(0.862);
            trackNavigation('Projects', 0.862);
          }}
        >
          <BookCopy size={20} />
        </motion.button>
        <motion.button
          whileTap={{ scale: 2.5 }}
          className="bg-slate-200 p-4 rounded-md cursor-pointer shadow-sm hover:bg-slate-300 transition-all duration-300 ease-in-out"
          onClick={() => {
            setFromUiScrollProgress(0.99);
            trackNavigation('Contact', 0.99);
          }}
        >
          <Handshake size={20} />
        </motion.button>
      </motion.div>
    </>
  );
}

import { CircleX } from "lucide-react";
import { useModalStore } from "../stores/modalStore";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Modal() {
  const { isModalOpen, modalTitle, modalContent, closeModal } = useModalStore();
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsAnimating(true);
      // setCachedContent(modalContent);
      // setCachedTitle(modalTitle);
      requestAnimationFrame(() => {
        setShouldAnimate(true);
      });
    } else {
      setShouldAnimate(false);
      const timer = setTimeout(() => {
        // setCachedContent(null);
        // setCachedTitle("");
        setIsAnimating(false);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, modalContent, modalTitle]);

  if (!isModalOpen && !isAnimating) return null;

  return (
    <>
      <div
        onClick={closeModal}
        className="modal-overlay absolute top-0 left-0 w-full h-full bg-slate-300/20 z-50"
      ></div>
      <div
        className={`modal-content transition-all duration-300 absolute overflow-y-scroll top-0 left-0 z-50 w-full md:w-1/2 max-w-[550px] h-screen bg-white p-4 ${shouldAnimate ? "modal-enter" : "modal-exit"}`}
      >
        <button
          className="modal-content-close-button ml-auto block cursor-pointer"
          onClick={closeModal}
        >
          <CircleX />
        </button>
        <div className="modal-content-header">
          <motion.h1
            className="modal-title text-3xl mb-6"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            {modalTitle}
          </motion.h1>
        </div>
        <motion.div
          className="modal-body pb-32"
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {modalContent}
        </motion.div>
      </div>
    </>
  );
}

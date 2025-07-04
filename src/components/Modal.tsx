import { CircleX } from "lucide-react";
import { useModalStore } from "../stores/modalStore";

export default function Modal() {
  const { isModalOpen, modalTitle, modalContent, closeModal } = useModalStore();

  if (!isModalOpen) return null;

  return (
    <>
      <div
        onClick={closeModal}
        className="modal-overlay absolute top-0 left-0 w-full h-full bg-slate-300/20 z-50"
      ></div>
      <div className="modal-content absolute top-0 left-0 z-50 w-full md:w-1/2 max-w-[550px] h-screen bg-white p-4">
        <button
          className="modal-content-close-button ml-auto block cursor-pointer"
          onClick={closeModal}
        >
          <CircleX />
        </button>
        <div className="modal-content-header">
          <h1 className="modal-title text-3xl mb-6">{modalTitle}</h1>
        </div>
        <div className="modal-body">{modalContent}</div>
      </div>
    </>
  );
}

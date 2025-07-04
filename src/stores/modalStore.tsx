import type { JSX } from "react";
import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  modalTitle: string;
  modalContent: any;
  openModal: (title: string, content: JSX.Element) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalTitle: "",
  modalContent: "",

  openModal: (title: string, content: JSX.Element) =>
    set({
      isModalOpen: true,
      modalTitle: title,
      modalContent: content,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      modalTitle: "",
      modalContent: "",
    }),
}));

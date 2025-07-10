import type { JSX } from "react";
import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  modalTitle: string;
  modalContent: any;
  scrollProgress: number;
  targetScrollProgress: number;
  openModal: (title: string, content: JSX.Element) => void;
  closeModal: () => void;
  experienceStarted: boolean;
  setExperienceStarted: (started: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalTitle: "",
  modalContent: "",
  scrollProgress: 0,
  targetScrollProgress: 0,
  experienceStarted: false,
  theme: "day",

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

  setExperienceStarted: (started: boolean) =>
    set({ experienceStarted: started }),

  setTheme: (theme: string) => set({ theme }),
}));

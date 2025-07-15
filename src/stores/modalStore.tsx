import type { JSX } from "react";
import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  modalTitle: string;
  modalContent: any;
  fromUiScrollProgress: number | null;
  targetScrollProgress: number;
  openModal: (title: string, content: JSX.Element) => void;
  closeModal: () => void;
  introStarted: boolean;
  setIntroStarted: (started: boolean) => void;
  experienceStarted: boolean;
  setExperienceStarted: (started: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  setFromUiScrollProgress: (progress: number | null) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalTitle: "",
  modalContent: "",
  fromUiScrollProgress: null,
  targetScrollProgress: 0,
  experienceStarted: false,
  introStarted: false,
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
  setFromUiScrollProgress: (progress: number | null) =>
    set({ fromUiScrollProgress: progress }),
  setIntroStarted: (started: boolean) => set({ introStarted: started }),
}));

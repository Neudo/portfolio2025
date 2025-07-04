import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  modalTitle: string;
  modalContent: any;
  modalType: string;
  openModal: (title: string, content: JSX.Element, type: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalTitle: "",
  modalContent: "",
  modalType: "",

  openModal: (title: string, content: string, type: string) =>
    set({
      isModalOpen: true,
      modalTitle: title,
      modalContent: content,
      modalType: type,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      modalTitle: "",
      modalContent: "",
      modalType: "",
    }),
}));

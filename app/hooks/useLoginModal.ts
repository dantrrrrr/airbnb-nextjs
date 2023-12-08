//handle open and close modal


import { create } from "zustand";
//type
interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

//set init value and action to modify value
const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;

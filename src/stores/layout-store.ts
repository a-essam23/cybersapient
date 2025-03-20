import { create } from "zustand";

interface LayoutStoreState {
  scrollDisabled: boolean;
}

interface LayoutStoreActions {
  toggleScroll: (disabled: boolean) => void;
}

const useLayoutStore = create<LayoutStoreState & LayoutStoreActions>(
  (set, get) => ({
    scrollDisabled: false,
    toggleScroll: (disabled) => {
      if (get().scrollDisabled !== disabled) set({ scrollDisabled: disabled });
      // Apply or remove scroll lock to body
      if (disabled) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  })
);

export default useLayoutStore;

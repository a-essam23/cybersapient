import { create } from "zustand";

export type DeviceType = "mobile" | "tablet" | "desktop";

// eslint-disable-next-line
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

interface LayoutStoreState {
  scrollDisabled: boolean;
  dimensions: {
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
  type: "mobile" | "tablet" | "desktop";
}

interface LayoutStoreActions {
  toggleScroll: (disabled: boolean) => void;
  initializeDimensions: (type: DeviceType) => () => void;
}

export interface IRoute {
  label: string;
  href: string;
  icon?: string;
}

export interface IRouteCategory {
  category: string;
  items: IRoute[];
}

export const routes: IRouteCategory[] = [
  {
    category: "UPGRADES",
    items: [
      { label: "CRED money", href: "#" },
      { label: "CRED mint", href: "#" },
      { label: "CRED garage", href: "#" },
      { label: "CRED escapes", href: "#" },
    ],
  },
  {
    category: "COMPANY",
    items: [
      { label: "about CRED", href: "#" },
      { label: "careers", href: "#" },
    ],
  },
  {
    category: "RESOURCES",
    items: [
      { label: "partner with us", href: "#" },
      { label: "calculators", href: "#" },
      { label: "articles", href: "#" },
      { label: "tech blog", href: "#" },
      { label: "credit score guide", href: "#" },
      { label: "credit card payment guide", href: "#" },
      { label: "customer care", href: "#" },
      { label: "Dreampurse (HipBar) wallet", href: "#" },
      { label: "refund form", href: "#" },
    ],
  },
  {
    category: "PAYMENTS",
    items: [
      { label: "Scan & Pay", href: "#" },
      { label: "Tap to Pay", href: "#" },
      { label: "Pay anyone", href: "#" },
      { label: "RuPay cards on UPI", href: "#" },
    ],
  },

  {
    category: "INSIDER PERKS",
    items: [{ label: "upgrade to UPI", href: "#" }],
  },
  {
    category: "POLICY",
    items: [
      { label: "transaction & user verification", href: "#" },
      { label: "Google API disclosure", href: "#" },
      { label: "UPI FAQ & grievances", href: "#" },
      { label: "returns and refunds", href: "#" },
      { label: "security", href: "#" },
      { label: "equal opportunity policy", href: "#" },
      { label: "investor relations", href: "#" },
      { label: "other disclosures", href: "#" },
    ],
  },
  {
    category: "DESIGN",
    items: [
      { label: "NeoPOP", href: "#" },
      { label: "manifesto", href: "#" },
    ],
  },
];

const useLayoutStore = create<LayoutStoreState & LayoutStoreActions>(
  (set, get) => ({
    scrollDisabled: false,
    dimensions: {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    },
    type: "desktop",
    toggleScroll: (disabled) => {
      if (get().scrollDisabled !== disabled) set({ scrollDisabled: disabled });
      if (disabled) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    initializeDimensions: (type) => {
      set({ type });

      const handleResize = debounce(() => {
        const width = window.innerWidth;
        set({
          dimensions: {
            width,
            height: window.innerHeight,
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isDesktop: width >= 1024,
          },
        });
      }, 25);

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
  })
);

export default useLayoutStore;

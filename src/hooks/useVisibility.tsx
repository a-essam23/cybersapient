import { useEffect, useState, useRef, RefObject } from "react";

export default function useElementVisibility(threshold: number = 0.5): {
  isVisible: boolean;
  ref: RefObject<HTMLElement | null>;
} {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIsVisible(entry.intersectionRatio >= threshold);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { isVisible, ref };
}

"use client";

import { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cn from "@utils/cn";

type CanvasScrollProps = {
  href: string;
  frameCount: number;
  padLength?: number;
  canvasClassName?: string;
  containerClassName?: string;
  ease?: string;
};

const CanvasScrollAnimation = ({
  href,
  frameCount,
  canvasClassName,
  containerClassName,
  ease = "sine",
}: CanvasScrollProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const loadedImages = useRef<Set<number>>(new Set());
  const smoothProgress = useRef(0);
  const previousFrame = useRef(0);

  const images = useMemo(() => {
    if (typeof window === "undefined") return [];

    return Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.src = href.replace("{id}", i.toString());

      img.onload = () => loadedImages.current.add(i);
      img.onerror = () => console.error(`Failed to load image: ${img.src}`);

      return img;
    });
  }, [href, frameCount]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");

    const setCanvasSize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();

      canvas.width = (rect?.width || window.innerWidth) * dpr;
      canvas.height = (rect?.height || window.innerHeight) * dpr;

      ctxRef.current?.scale(dpr, dpr);
    };

    setCanvasSize();
    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(canvas.parentElement!);

    const updateFrame = (targetProgress: number) => {
      gsap.to(smoothProgress, {
        current: targetProgress,
        duration: 0.15,
        ease: "power1.inOut",
        onUpdate: () => {
          const easedProgress = gsap.parseEase("power1.in")(
            smoothProgress.current
          );
          const rawFrameIndex = easedProgress * frameCount;
          const currentFrame = Math.min(
            frameCount - 1,
            Math.floor(rawFrameIndex)
          );

          if (currentFrame !== previousFrame.current) {
            previousFrame.current = currentFrame;
          } else {
            return;
          }
          if (currentFrame === frameCount) return;
          if (loadedImages.current.has(currentFrame)) {
            const img = images[currentFrame];
            const canvas = canvasRef.current!;
            ctxRef.current?.clearRect(0, 0, canvas.width, canvas.height);
            ctxRef.current?.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        },
      });
    };

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: canvas.parentElement,
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => updateFrame(self.progress),
    });

    return () => {
      resizeObserver.disconnect();
      scrollTriggerInstance.kill();
      gsap.killTweensOf(smoothProgress);
    };
  }, [frameCount, images]);

  return (
    <section className={cn(`relative h-[200vh]`, containerClassName)}>
      <canvas
        ref={canvasRef}
        className={cn("sticky top-0 w-full h-screen", canvasClassName)}
      />
    </section>
  );
};

export default CanvasScrollAnimation;

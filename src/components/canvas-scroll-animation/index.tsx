"use client";
import { useRef, useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cn from "@utils/cn";
import useLayoutStore, { DeviceType } from "@stores/layout-store";
import useElementVisibility from "@hooks/useVisibility";

type EaseString =
  | "none"
  | "power1"
  | "power1.in"
  | "power1.out"
  | "power1.inOut"
  | "power2"
  | "power2.in"
  | "power2.out"
  | "power2.inOut"
  | "power3"
  | "power3.in"
  | "power3.out"
  | "power3.inOut"
  | "power4"
  | "power4.in"
  | "power4.out"
  | "power4.inOut"
  | "back"
  | "back.in"
  | "back.out"
  | "back.inOut"
  | "bounce"
  | "bounce.in"
  | "bounce.out"
  | "bounce.inOut"
  | "circ"
  | "circ.in"
  | "circ.out"
  | "circ.inOut"
  | "elastic"
  | "elastic.in"
  | "elastic.out"
  | "elastic.inOut"
  | "expo"
  | "expo.in"
  | "expo.out"
  | "expo.inOut"
  | "sine"
  | "sine.in"
  | "sine.out"
  | "sine.inOut"
  | ({} & string);

type CanvasScrollProps = {
  href: string;
  frameCount: number;
  padLength?: number;
  canvasClassName?: string;
  containerClassName?: string;
  easeTo?: EaseString;
  easeUpdate?: EaseString;
  duration?: number;
  device: DeviceType;
};

const CanvasScrollAnimation = ({
  href,
  frameCount,
  canvasClassName,
  containerClassName,
  easeTo = "power1.inOut",
  easeUpdate = "power1.in",
  duration = 0.15,
  device,
}: CanvasScrollProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const loadedImages = useRef<Set<number>>(new Set());
  const smoothProgress = useRef(0);
  const previousFrame = useRef(0);

  const images = useMemo(() => {
    if (typeof window === "undefined") return [];
    let _href = href.replace("{device}", device);
    return Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();

      img.src = _href.replace("{id}", i.toString());
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
      const rect = canvas.getBoundingClientRect();

      // Set display dimensions (CSS pixels)
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Set actual dimensions (physical pixels)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Scale context to account for DPR
      ctxRef.current!.scale(1, 1);
      ctxRef.current!.imageSmoothingEnabled = true;
      ctxRef.current!.imageSmoothingQuality = "high";
    };

    setCanvasSize();
    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(canvas.parentElement!);

    const updateFrame = (targetProgress: number) => {
      gsap.to(smoothProgress, {
        current: targetProgress,
        duration,
        ease: easeTo,
        onUpdate: () => {
          const easedProgress = gsap.parseEase(easeUpdate)(
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
        className={cn("sticky top-0 h-screen w-full", canvasClassName)}
      />
    </section>
  );
};

const CanvasScrollAnimationLazy = (props: CanvasScrollProps) => {
  const { ref, isVisible } = useElementVisibility(0.1);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full"
    >
      {shouldRender && <CanvasScrollAnimation {...props} />}
    </div>
  );
};

export default CanvasScrollAnimationLazy;

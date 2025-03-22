"use client";
import useElementVisibility from "@hooks/useVisibility";
import useLayoutStore from "@stores/layout-store";
import cn from "@utils/cn";
import { useEffect, useMemo, useRef, useState } from "react";

interface LockedVideoSectionProps {
  isMobile?: boolean;
  threshold?: number;
  videoSrc: { desktop: string; mobile: string };
  posters?: { desktop: string; mobile: string };
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  lock?: boolean;
  hideChildrenBeforePlay?: boolean;
  childrenContainerClassName?: string;
}

const LockedVideoSection: React.FC<LockedVideoSectionProps> = ({
  videoSrc,
  className,
  isMobile,
  posters,
  threshold = 0.75,
  children,
  lock = true,
  hideChildrenBeforePlay,
  childrenContainerClassName,
}) => {
  const { toggleScroll } = useLayoutStore();
  const { ref, isVisible } = useElementVisibility(threshold);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const _videoData = useMemo(
    () =>
      isMobile
        ? { src: videoSrc["mobile"], poster: posters?.["mobile"] }
        : { src: videoSrc["desktop"], poster: posters?.["desktop"] },
    [isMobile]
  );

  useEffect(() => {
    if (videoPlayed) return;
    if (isVisible && !videoPlayed && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
      if (!isMobile && lock) toggleScroll(true);
      videoRef.current.play();
    }
  }, [isVisible]);
  // Unlock scroll once the video ends
  const handleVideoEnded = () => {
    setVideoPlayed(true);
    if (!isMobile && lock) toggleScroll(false); // Unlock scroll
  };

  return (
    <section className={cn("relative h-screen w-full", className)} ref={ref}>
      <video
        muted
        className="h-full w-full object-cover"
        ref={videoRef}
        onEnded={handleVideoEnded}
        poster={_videoData.poster}
      >
        <source src={_videoData.src} type="video/mp4" />
      </video>
      <div
        className={cn(
          "transition-all ease-in absolute top-0 left-0 opacity-0",
          {
            "opacity-100": videoPlayed,
          },
          childrenContainerClassName
        )}
      >
        {hideChildrenBeforePlay ? videoPlayed && children : children}
      </div>
    </section>
  );
};

export default LockedVideoSection;

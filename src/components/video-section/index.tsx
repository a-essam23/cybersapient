"use client";
import useElementVisibility from "@hooks/useVisibility";
import useLayoutStore from "@stores/layout-store";
import cn from "@utils/cn";
import { useEffect, useMemo, useRef, useState } from "react";

interface LockedVideoSectionProps {
  isMobile?: boolean;
  videoSrc: { desktop: string; mobile: string };
  posters?: { desktop: string; mobile: string };
  className?: string;
}

const LockedVideoSection: React.FC<LockedVideoSectionProps> = ({
  videoSrc,
  className,
  isMobile,
  posters,
}) => {
  const { toggleScroll } = useLayoutStore();
  const { ref, isVisible } = useElementVisibility(0.75);
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
    console.log(isVisible);
    if (isVisible && !videoPlayed && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
      if (!isMobile) toggleScroll(true);
      videoRef.current.play();
    }
  }, [isVisible]);
  // Unlock scroll once the video ends
  const handleVideoEnded = () => {
    setVideoPlayed(true);
    if (!isMobile) toggleScroll(false); // Unlock scroll
  };

  return (
    <section className={"h-screen w-full"} ref={ref}>
      <video
        muted
        className="h-full w-full object-cover"
        ref={videoRef}
        onEnded={handleVideoEnded}
        poster={_videoData.poster}
      >
        <source src={_videoData.src} type="video/mp4" />
      </video>
    </section>
  );
};

export default LockedVideoSection;

import LockedVideoSection from "@components/video-section";

interface CardsVideoSectionProps {
  isMobile?: boolean;
}

const MultiCCVideoSection: React.FC<CardsVideoSectionProps> = ({
  isMobile,
}) => {
  const videoSrcs = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/multi-card/multi-card-mobile-video.mp4?tr=q-95",
  };
  const posters = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/multi-card/mc-fold-desktop-poster.jpg?tr=orig",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/multi-card/multi-card-fold-mobile-poster.jpg?tr=orig",
  };

  return (
    <LockedVideoSection
      videoSrc={videoSrcs}
      isMobile={isMobile}
      posters={posters}
    />
  );
};

export default MultiCCVideoSection;

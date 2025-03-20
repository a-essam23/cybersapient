import LockedVideoSection from "@components/video-section";

interface LiveUpdatesVideoSectionProps {
  isMobile?: boolean;
}

const LiveUpdatesVideoSection: React.FC<LiveUpdatesVideoSectionProps> = ({
  isMobile,
}) => {
  const videoSrcs = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/single-card/single-card.mp4?tr=q-95",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/single-card/single-card-fold-mobile.mp4?tr=q-95",
  };
  const posters = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg?tr=orig",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/single-card/single-card-fold-mobile-poster.jpg?tr=orig",
  };

  return (
    <LockedVideoSection
      videoSrc={videoSrcs}
      isMobile={isMobile}
      posters={posters}
    />
  );
};

export default LiveUpdatesVideoSection;

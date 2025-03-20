import LockedVideoSection from "@components/video-section";
import QRCodeCard from "./qrcode-card";
import DownloadButton from "./download-button";
import cn from "@utils/cn";

interface CallToActionSectionProps {
  isMobile?: boolean;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  isMobile,
}) => {
  const src = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/tablet/cta/cta-fold-desktop.mp4?tr=orig",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/cta/cta-fold-mobile.mp4?tr=orig",
  };
  const poster = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/cta/cta-fold-desktop-poster.jpg?tr=orig",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/cta/cta-fold-mobile-poster.jpg?tr=orig",
  };
  return (
    <LockedVideoSection
      isMobile={isMobile}
      className="relative "
      videoSrc={src}
      posters={poster}
      hideChildrenBeforePlay
      childrenContainerClassName={cn("top-[26%] left-2/4 -translate-x-2/4", {
        "top-[55%] translate-y-full": isMobile,
      })}
    >
      {isMobile ? <DownloadButton /> : <QRCodeCard />}
    </LockedVideoSection>
  );
};

export default CallToActionSection;

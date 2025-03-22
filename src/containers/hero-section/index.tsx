const HeroSection: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const videoSrc = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/hero-fold/hero-fold-mobile.mp4?tr=q-95",
  };
  const poster = {
    desktop:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/hero-fold/hero-fold-desktop-poster.jpg?tr=orig",
    mobile:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/hero-fold/hero-fold-mobile-poster.jpg?tr=orig",
  };
  return (
    <section className="h-screen w-full  ">
      <video
        autoPlay
        muted
        className="h-full w-full object-cover"
        poster={isMobile ? poster.mobile : poster.desktop}
      >
        <source
          src={isMobile ? videoSrc.mobile : videoSrc.desktop}
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default HeroSection;

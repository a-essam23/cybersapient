import HeadlineSection from "@containers/headline-section";
import HeroSection from "@containers/hero-section";
import LiveUpdatesVideoSection from "@containers/live-updates-video-section";
import MultiCCVideoSection from "@containers/multi-cc-video-section";
import UnbilledCanvasScroll from "@containers/unbilled-canvas-scroll";
import TouchCardsSection from "@containers/touch-cards-section";
import { headers } from "next/headers";
import { userAgent } from "next/server";

export default async function Home() {
  const { device } = userAgent({ headers: await headers() });
  return (
    <>
      <HeroSection />
      <HeadlineSection />
      {/* <MultiCCVideoSection isMobile={device.type === "mobile"} /> */}
      <UnbilledCanvasScroll />
      <LiveUpdatesVideoSection isMobile={device.type === "mobile"} />
      <TouchCardsSection />
    </>
  );
}

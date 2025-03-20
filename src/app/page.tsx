import HeadlineSection from "@containers/headline-section";
import HeroSection from "@containers/hero-section";
import LiveUpdatesVideoSection from "@containers/live-updates-video-section";
import MultiCCVideoSection from "@containers/multi-cc-video-section";
import UnbilledCanvasScroll from "@containers/unbilled-canvas-scroll-section";
import TouchCardsSection from "@containers/touch-cards-section";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import SSCanvasScrollSection from "@containers/ss-canvas-scroll-section";
import PerksCanvasScrollSection from "@containers/perks-canvas-scroll-section";
import ProtectDividerSection from "@containers/protect-divider-section";
import CallToActionSection from "@containers/call-to-action-section";

export default async function Home() {
  const { device } = userAgent({ headers: await headers() });
  return (
    <>
      {/* <HeroSection /> */}
      <HeadlineSection />
      {/* <MultiCCVideoSection isMobile={device.type === "mobile"} /> */}
      {/* <UnbilledCanvasScroll /> */}
      {/* <LiveUpdatesVideoSection isMobile={device.type === "mobile"} /> */}
      {/* <TouchCardsSection /> */}
      {/* <SSCanvasScrollSection /> */}
      <PerksCanvasScrollSection />
      <ProtectDividerSection />
      <CallToActionSection isMobile={device.type === "mobile"} />
    </>
  );
}

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
import FaqsSection from "@containers/faqs-section";
import { DeviceType } from "@stores/layout-store";

const parseDeviceType = (type?: string): DeviceType => {
  if (type === "mobile") return "mobile";
  if (type === "tablet") return "tablet";
  return "desktop";
};

export default async function Home() {
  const { device } = userAgent({ headers: await headers() });
  const type = parseDeviceType(device.type);
  return (
    <>
      {/* <HeroSection isMobile={type === "mobile"} /> */}
      <HeadlineSection />
      {/* <MultiCCVideoSection isMobile={type === "mobile"} /> */}
      <UnbilledCanvasScroll device={type} />
      {/* <LiveUpdatesVideoSection isMobile={type === "mobile"} /> */}
      <TouchCardsSection />
      <SSCanvasScrollSection device={type} />
      <PerksCanvasScrollSection device={type} />
      <ProtectDividerSection />
      {/* <CallToActionSection isMobile={type === "mobile"} /> */}
      <FaqsSection />
    </>
  );
}

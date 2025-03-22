"use client";
import NowLiveButton from "@components/now-live-button";
import useLayoutStore, { IRoute } from "@stores/layout-store";
import NavbarWhatsNewTabCard from "./navbar-whats-new-tab-card";

interface WhatsNewCardItem extends IRoute {
  description: string;
}

const routes: WhatsNewCardItem[] = [
  {
    label: "money",
    href: "#",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/money-thumbnail.png",
    description: "track, analyze, and reflect\non your financial behavior",
  },
  {
    label: "garage",
    href: "#",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/garage-thumbnail.png",
    description: "manage, maintain, and\nobsess over your cars",
  },
  {
    label: "pay anyone",
    href: "#",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/p2p-thumbnail.png",
    description: "pay anyone, no matter\nwhat UPI app they're on",
  },
  {
    label: "work for cred",
    href: "#",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/careers-thumbnail.png",
    description: "apply to build the most\ntrustworthy community",
  },
];

const NavbarWhatsNewTab: React.FC<{}> = () => {
  const {
    dimensions: { isDesktop },
  } = useLayoutStore();
  return (
    <>
      <ol className="flex lg:flex-col flex-nowrap gap-[20px] lg:gap-[45px]">
        <NowLiveButton className="hidden lg:block" />
        <NavbarWhatsNewTabCard
          label="SVALBARD"
          // description="pay anywhere, anytime"
          icon="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/cards/now-live-square.png?tr=q-95"
          href="#"
          className="relative lg:hidden"
        >
          <div
            className="absolute top-0 left-2/4 -translate-x-2/4 -translate-y-1/2 whitespace-nowrap
          border border-white/20 bg-black 
          text-[7.486px] font-bold leading-[12.833px] tracking-[2.139px] 
          text-center text-white uppercase 
          p-[5px_10px] box-border"
          >
            NOW LIVE
          </div>
        </NavbarWhatsNewTabCard>
        <div className="flex gap-5">
          {routes.map((r) => (
            <NavbarWhatsNewTabCard
              key={r.label}
              description={r.description}
              label={r.label}
              icon={r.icon!}
              href={r.href}
            />
          ))}
        </div>
      </ol>
    </>
  );
};

export default NavbarWhatsNewTab;

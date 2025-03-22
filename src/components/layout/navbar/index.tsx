"use client";
import { useEffect, useState } from "react";
import NavbarBurger from "./navbar-burger";
import useLayoutStore, { IRoute, routes } from "@stores/layout-store";
import cn from "@utils/cn";
import NavbarNavigationBox from "./navbar-navigation-box";
import NavbarWhatsNewTab from "./navbar-whats-new-tab";
import NavbarLogo from "./navbar-logo";
import NavbarTabs from "./navbar-tabs";
import NavbarOverlay from "./navbar-overlay";
export const navbarTabs = [
  "whats new",
  "payments",
  "upgrades",
  "company",
  "insider perks",
] as const;

export const navRoutes: Record<(typeof navbarTabs)[number], IRoute[]> = {
  "whats new": [],
  payments: [
    {
      label: "Tap to Pay",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/tnp-logo.png",
    },
    {
      label: "Pay anyone",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/p2p-logo.png",
    },
    {
      label: "RuPay cards on UPI",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/rupay-logo.png",
    },
    {
      label: "Scan & Pay",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/snp-logo.png",
    },
  ],
  upgrades: [
    {
      label: "travel",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/travel-logo.png",
    },
    {
      label: "garage",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/garage-logo.png",
    },
    {
      label: "mint",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/mint-logo.png",
    },

    {
      label: "money",
      href: "#",
      icon: "https://web-images.credcdn.in/v2/_next/assets/images/navbar/money-logo.png",
    },
  ],
  company: routes.find((r) => r.category === "COMPANY")?.items ?? [],
  "insider perks":
    routes.find((r) => r.category === "INSIDER PERKS")?.items ?? [],
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleScroll } = useLayoutStore();
  const [selectedTab, setSelectedTab] = useState<
    (typeof navbarTabs)[number] | undefined
  >("whats new");

  useEffect(() => {
    toggleScroll(isOpen);
    setSelectedTab("whats new");
  }, [isOpen]);

  return (
    <div className="flex h-screen w-full overflow-auto absolute top-0 left-0 z-50">
      <nav
        className={
          "relative transition w-full h-full flex flex-col p-[64px_40px_0px] lg:p-[70px_130px] gap-[70px] z-[2] "
        }
      >
        <div className="flex justify-between w-full gap-5">
          <NavbarLogo />
          <NavbarBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && (
          <div
            className={cn("flex-grow gap-[150px] hidden", {
              flex: isOpen,
            })}
          >
            <NavbarTabs
              isOpen={isOpen}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <NavbarNavigationBox
              routes={selectedTab && navRoutes[selectedTab]}
              className="hidden lg:flex"
            >
              {selectedTab === "whats new" && <NavbarWhatsNewTab />}
            </NavbarNavigationBox>
          </div>
        )}
      </nav>
      <NavbarOverlay isOpen={isOpen} />
    </div>
  );
};

export default Navbar;

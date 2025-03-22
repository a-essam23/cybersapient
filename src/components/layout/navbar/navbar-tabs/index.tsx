"use client";
import cn from "@utils/cn";
import NavbarTab from "./navbar-tab";
import { navbarTabs, navRoutes } from "..";
import { Dispatch } from "react";
import useLayoutStore from "@stores/layout-store";
import NavbarAccordion from "./navbar-accordion";
import NavbarWhatsNewTab from "../navbar-whats-new-tab";
interface NavbarTabsProps {
  selectedTab?: (typeof navbarTabs)[number];
  setSelectedTab: Dispatch<NavbarTabsProps["selectedTab"]>;
  isOpen: boolean;
}
const NavbarTabs: React.FC<NavbarTabsProps> = ({
  selectedTab,
  setSelectedTab,
  isOpen,
}) => {
  const {
    dimensions: { isDesktop },
  } = useLayoutStore();
  if (!isDesktop)
    return (
      <div className="flex flex-col overflow-x-scroll">
        {navbarTabs.map((tab) => (
          <NavbarAccordion
            key={tab}
            category={tab}
            items={navRoutes[tab]}
            isOpen={selectedTab === tab}
            onOpenChange={() =>
              tab === selectedTab
                ? setSelectedTab(undefined)
                : setSelectedTab(tab)
            }
            containerClassName="overflow-x-auto no-scrollbar"
          >
            {selectedTab === "whats new" && <NavbarWhatsNewTab />}
          </NavbarAccordion>
        ))}
      </div>
    );
  return (
    <div
      className={cn(
        "transition duration-300 delay-75 flex flex-col h-full min-w-[30%] max-w-[50%] translate-y-full",
        {
          "translate-y-0": isOpen,
        }
      )}
    >
      {navbarTabs.map((tab) => (
        <NavbarTab
          onHover={() => setSelectedTab(tab)}
          key={tab}
          label={tab}
          selected={selectedTab === tab}
        />
      ))}
    </div>
  );
};

export default NavbarTabs;

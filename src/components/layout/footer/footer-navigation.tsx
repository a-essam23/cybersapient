"use client";
import Masonry from "react-responsive-masonry";
import NavigationColumn from "./navigation-column";
import useLayoutStore, { routes } from "@stores/layout-store";

const FooterNavigation = () => {
  const {
    dimensions: { isDesktop },
  } = useLayoutStore();
  if (isDesktop)
    return (
      <Masonry columnsCount={3} gutter="20px">
        {routes.map((r) => (
          <NavigationColumn key={r.category} {...r} />
        ))}
      </Masonry>
    );
  return (
    <div className="flex flex-col gap-[5px]">
      {routes.map((r) => (
        <NavigationColumn accordion key={r.category} {...r} />
      ))}
    </div>
  );
};

export default FooterNavigation;

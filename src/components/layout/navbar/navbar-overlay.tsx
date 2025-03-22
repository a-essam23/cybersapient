import cn from "@utils/cn";

const NavbarOverlay: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={cn(
        "transition pointer-events-none duration-300 translate-x-full lg:translate-x-0 lg:opacity-0 fixed w-full h-screen left-0 top-0 flex-grow bg-black z-[1]",
        {
          "translate-x-0 lg:opacity-100": isOpen,
        }
      )}
    />
  );
};

export default NavbarOverlay;

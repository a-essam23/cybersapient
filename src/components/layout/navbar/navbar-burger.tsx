import cn from "@utils/cn";

interface NavbarBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavbarBurger: React.FC<NavbarBurgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="flex border border-white/20 w-[65px] lg:w-[80px] h-[65px] lg:h-[80px] justify-center items-center cursor-pointer aspect-square"
      onClick={onClick}
    >
      <div className="flex flex-col justify-between overflow-hidden w-[22px] h-max aspect-square">
        <div
          className={cn(
            "transition ease-linear w-full h-0.5 bg-white duration-[400ms] delay-75",
            {
              "rotate-45 translate-y-[500%] scale-x-125": isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "transition ease-linear w-full h-0.5 bg-white translate-x-0 opacity-100 duration-[400ms] delay-75",
            {
              "-translate-x-full opacity-0": isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "transition ease-linear w-full h-0.5 bg-white duration-[400ms] delay-75",
            {
              "-rotate-45 -translate-y-[500%] scale-x-125": isOpen,
            }
          )}
        ></div>
      </div>
    </button>
  );
};

export default NavbarBurger;

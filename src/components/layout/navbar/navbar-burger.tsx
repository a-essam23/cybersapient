import cn from "@utils/cn";

interface NavbarBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavbarBurger: React.FC<NavbarBurgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="flex border border-white/20 w-[80px] h-[80px] justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col justify-between h-[22px] overflow-hidden">
        <div
          className={cn(
            "transition ease-linear w-[22px] h-0.5 bg-white duration-[400ms] delay-75",
            {
              "rotate-45 translate-y-[500%] scale-x-125": isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "transition ease-linear w-[22px] h-0.5 bg-white translate-x-0 opacity-100 duration-[400ms] delay-75",
            {
              "-translate-x-full opacity-0": isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "transition ease-linear w-[22px] h-0.5 bg-white duration-[400ms] delay-75",
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

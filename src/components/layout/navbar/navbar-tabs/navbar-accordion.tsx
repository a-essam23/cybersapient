import Accordion, { AccordionProps } from "@components/accordion";
import { IRoute } from "@stores/layout-store";
import cn from "@utils/cn";
import Image from "next/image";
import Link from "next/link";

interface NavbarAccordionProps extends Partial<AccordionProps> {
  category: string;
  items: IRoute[];
  children?: React.ReactNode;
}
const NavbarAccordion: React.FC<NavbarAccordionProps> = ({
  category,
  items,
  children,
  ...props
}) => {
  return (
    <Accordion
      containerClassName="flex pt-5 px-0 pb-10 border-b border-white/20"
      trigger={NavbarAccordionTrigger(category)}
      wrapperClassName="duration-100 delay-0 ease-linear"
      {...props}
    >
      {items.length > 0 && (
        <div className="flex flex-wrap gap-x-[40px] gap-y-[30px]">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-2.5
          text-[13px] tracking-[3px] 
          md:text-[14px] font-medium leading-[16px] md:tracking-[6px]
          text-white/70 uppercase animate-fadein"
            >
              {item?.icon && (
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[30px] h-[30px]"
                />
              )}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
      {children}
    </Accordion>
  );
};

export const NavbarAccordionTrigger = (label: string) => {
  const Trigger: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
    return (
      <div
        className={cn(
          `py-[30px] w-full flex items-start cursor-pointer box-border 
        text-[16px] font-medium leading-[17.635px] tracking-[5px] 
        text-left text-white/90 uppercase border-b border-white/20`,
          isOpen && "border-b-0"
        )}
      >
        <span>{label}</span>
        <Image
          src={"/arrow-up.svg"}
          width={24}
          height={24}
          alt="arrow-up"
          className={cn("transition duration-300 ease-out", {
            "rotate-180": isOpen,
          })}
        />
      </div>
    );
  };
  return Trigger;
};

export default NavbarAccordion;

import cn from "@utils/cn";
import Image from "next/image";
import Link from "next/link";

interface NavbarWhatsNewTabCardProps {
  label: string;
  description?: string;
  icon: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const NavbarWhatsNewTabCard: React.FC<NavbarWhatsNewTabCardProps> = ({
  label,
  description,
  icon,
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col justify-start items-center gap-2.5 lg:gap-[25px] h-max lg:h-auto",
        className
      )}
    >
      <div className="w-[140px] lg:w-[180px] aspect-square h-auto relative">
        <Image className="object-cover" alt={`${label}-icon`} src={icon} fill />
      </div>
      <div className="flex flex-col gap-0.5 lg:gap-[5px] text-center lg:h-full justify-between">
        <p
          className="text-white/90 uppercase flex items-center lg:h-full justify-center text-center font-semibold 
        text-[11.772px] leading-[14.126px] tracking-[2.943px] 
        lg:text-[17px] lg:leading-[24px] lg:tracking-[5px]"
        >
          {label}
        </p>
        <p
          className="text-white/40 font-medium 
        text-[10.595px] leading-[13.538px] tracking-[0.059px] 
        lg:text-[14px] lg:leading-[23px] lg:tracking-[0.1px]"
        >
          {description}
        </p>
      </div>
      {children}
    </Link>
  );
};

export default NavbarWhatsNewTabCard;

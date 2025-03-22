import cn from "@utils/cn";
import Link from "next/link";

const NavigationColumnItem: React.FC<{
  label: string;
  href: string;
  accordion?: boolean;
}> = ({ label, href, accordion }) => {
  return (
    <Link
      href={href}
      className={cn(
        "font-[500] text-[20px] leading-[44px] tracking-[0.3px] text-left text-white/30 break-words",
        accordion && "text-[14px] leading-[20px] tracking-[0.2px]"
      )}
    >
      {label}
    </Link>
  );
};

export default NavigationColumnItem;

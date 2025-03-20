import Image from "next/image";

export interface TouchSectionCardFooterProps {
  title: string;
  subtitle: string;
  icon: string;
}

const TouchSectionCardFooter: React.FC<TouchSectionCardFooterProps> = ({
  icon,
  subtitle,
  title,
}) => {
  return (
    <div className="flex justify-between min-h-fit">
      <img src={icon} alt={title} className="w-8 h-8" />
      <p className="text-[15px] leading-[27px] tracking-[1.58px] font-bold">
        {title}
        <span className="font-medium tracking-[0.37px]">{subtitle}</span>
      </p>
    </div>
  );
};
export default TouchSectionCardFooter;

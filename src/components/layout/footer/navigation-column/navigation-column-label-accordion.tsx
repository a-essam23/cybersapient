import cn from "@utils/cn";

interface NavigationColumnLabelAccordionProps {
  label: string;
  isOpen?: boolean;
}

const NavigationColumnLabelAccordion: React.FC<
  NavigationColumnLabelAccordionProps
> = ({ label, isOpen }) => {
  return (
    <p
      className="flex items-center justify-between border-t border-white/20
        p-[30px] text-[15.12px] font-semibold leading-[17.63px] tracking-[3.7px] 
        text-left text-white/90 box-border"
    >
      <span>{label}</span>
      <img
        className={cn(
          "w-[25px] h-auto transition duration-300 ease-in-out",
          isOpen && "rotate-45"
        )}
        src="https://web-images.credcdn.in/v2/_next/assets/images/landing/plus-icon.png"
        alt="plus"
      />
    </p>
  );
};

const NavigationColumnAccordionTrigger = (label: string) => {
  const TriggerComponent: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => (
    <NavigationColumnLabelAccordion label={label} isOpen={isOpen} />
  );
  return TriggerComponent;
};

export default NavigationColumnAccordionTrigger;

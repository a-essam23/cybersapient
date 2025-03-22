import cn from "@utils/cn";

interface FaqsButtonProps {
  className?: string;
  isOpen?: boolean;
}

const FaqsButton: React.FC<FaqsButtonProps> = ({ className, isOpen }) => {
  return (
    <div
      className={cn(
        `text-[15.12px] leading-[3.77px] tracking-[8.4px] font-[500] 
    h-[16vh] md:h-[20vh]
    md:text-[30px] md:leading-[39.33px]
    flex items-center justify-center cursor-pointer
    box-border text-white/70 gap-[5px]`,
        className
      )}
    >
      <span className="uppercase hidden lg:inline-block">
        frequently asked questions
      </span>
      <span className="uppercase lg:hidden">faqs</span>
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/faq/down-arrow.png"
        alt="arrow"
        className={cn(
          "transition duration-500 ease-linear w-[22px] h-auto rotate-0",
          {
            "rotate-180": isOpen,
          }
        )}
      />
    </div>
  );
};

export default FaqsButton;

"use client";
import { useMemo, useState } from "react";
import cn from "@utils/cn";

export interface AccordionProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "className"> {
  trigger: React.FC<{ isOpen?: boolean }>;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: (isOpen: boolean) => string;
  // Add these new props
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  containerClassName?: string;
  wrapperClassName?: string;
}

const Accordion = ({
  trigger: Trigger,
  children,
  defaultOpen = false,
  className,
  // Add the new props with defaults
  isOpen: controlledIsOpen,
  onOpenChange,
  wrapperClassName,
  containerClassName,
  ...props
}: AccordionProps) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);

  // Use controlled state if provided, otherwise use uncontrolled
  const isOpen = controlledIsOpen ?? uncontrolledIsOpen;

  const handleToggle = () => {
    if (onOpenChange) {
      // Controlled mode
      onOpenChange(!isOpen);
    } else {
      // Uncontrolled mode
      setUncontrolledIsOpen(!isOpen);
    }
  };

  const _className = useMemo(() => className?.(isOpen) ?? "", [isOpen]);

  return (
    <div className={cn("w-full flex flex-col", _className)} {...props}>
      <div className="cursor-pointer" onClick={handleToggle}>
        <Trigger isOpen={isOpen} />
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0",
          wrapperClassName
        )}
      >
        <div className={cn("p-5", containerClassName)}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

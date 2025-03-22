import styles from "./navbar-tab.module.css";
import cn from "@utils/cn"; // Utility function for conditional classes

interface NavbarTabProps {
  label: string;
  onHover?: () => void;
  selected?: boolean;
  className?: string;
}

const NavbarTab: React.FC<NavbarTabProps> = ({
  label,
  onHover,
  selected,
  className,
}) => {
  return (
    <div
      onMouseEnter={onHover}
      className={cn(
        styles.container,
        "after:opacity-0",
        {
          "text-white/80 after:opacity-60": selected,
        },
        className
      )}
    >
      {label}
    </div>
  );
};

export default NavbarTab;

import styles from "./navigation-box.module.css";
import { IRoute } from "@stores/layout-store";
import cn from "@utils/cn";
import Link from "next/link";

interface NavbarNavigationBoxProps {
  routes?: IRoute[];
  className?: string;
  children?: React.ReactNode;
}
const NavbarNavigationBox: React.FC<NavbarNavigationBoxProps> = ({
  children,
  className,
  routes,
}) => {
  return (
    <ol className={cn("flex w-full flex-wrap ", className)}>
      {routes &&
        routes?.length > 0 &&
        routes.map((r) => (
          <Link key={r.label} href={r.href} className={styles.route}>
            {r?.icon && (
              <img src={r.icon} alt={r.label} className="w-[30px] h-[30px]" />
            )}
            <span>{r.label}</span>
          </Link>
        ))}
      <div className="flex flex-col w-full h-full gap-[60px]">{children}</div>
    </ol>
  );
};

export default NavbarNavigationBox;

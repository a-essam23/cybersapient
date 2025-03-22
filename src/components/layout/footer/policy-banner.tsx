import Link from "next/link";

const routes = [
  {
    label: "privacy policy",
    href: "https://cred.club/privacy",
  },
  {
    label: "terms and conditions",
    href: "https://cred.club/terms",
  },
];

const PolicyBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:w-full lg:justify-between items-center  lg:border-t border-white/25 lg:pt-[50px]">
      <div className="flex h-[14px] justify-center items-center">
        {routes.map((v) => (
          <Link
            key={v.label}
            className="text-[12.02px] font-medium leading-[19.24px]
            lg:text-[20px] lg:leading-[24px] lg:tracking-[0.1px]  
            text-left text-white/45 
            p-[0px_15px] border-r border-r-white/45 last:border-r-0
            no-underline outline-0"
            href={v.href}
            target="_blank"
          >
            {v.label}
          </Link>
        ))}
      </div>
      <p
        className="font-medium text-white/25 pt-[17px] lg:pt-0 lg:-order-1
      text-[12.02px] leading-[19.24px] tracking-[0.6px]
      lg:text-[20px] lg:leading-[30px] lg:tracking-[0.1px] 
      "
      >
        copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
      </p>
    </div>
  );
};

export default PolicyBanner;

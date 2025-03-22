import NowLiveButton from "@components/now-live-button";
import TrustBanner from "./trust-banner";
import PolicyBanner from "./policy-banner";
import FooterNavigation from "./footer-navigation";

const Footer = () => {
  return (
    <footer
      className="flex flex-col gap-[60px]
     bg-black text-white min-h-screen
     p-[70px_30px] sm:p-[180px_100px] lg:p-[100px_100px]
     "
    >
      <div
        className="w-full flex flex-col gap-[60px]
       lg:flex-row lg:gap-[40px]"
      >
        <div className="flex flex-col gap-[70px] lg:gap-[100px] lg:order-2 w-full lg:max-w-[60%]">
          <NowLiveButton className="w-full" />
          <img
            className="w-[70px] h-auto inline-block lg:hidden"
            src="/cred.svg"
            alt="cred-logo"
          />
          <FooterNavigation />
        </div>
        <div className="flex flex-col justify-between">
          <img
            className="w-[70px] h-auto hidden lg:inline-block"
            src="/cred.svg"
            alt="cred-logo"
          />
          <TrustBanner />
        </div>
      </div>
      <PolicyBanner />
    </footer>
  );
};

export default Footer;

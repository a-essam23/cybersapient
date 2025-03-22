import Image from "next/image";

const NavbarLogo = () => {
  return (
    <div
      className="flex justify-start items-center border w-full border-white/30 p-2.5 bg-black/20
    lg:border-0 lg:p-0 lg:bg-transparent"
    >
      <Image
        width={74}
        height={88}
        src={"/cred.svg"}
        alt="cred-logo"
        className="hidden lg:inline-block"
      />
      <Image
        width={92}
        height={44}
        src={"/cred-with-text.svg"}
        alt="cred-logo"
        className="inline-block lg:hidden"
      />
    </div>
  );
};

export default NavbarLogo;

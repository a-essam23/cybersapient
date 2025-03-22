import Image from "next/image";

const TrustBanner = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <Image
        src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png"
        alt="security logo"
        className="w-[180px] lg:w-[310px] h-auto"
        width={310}
        height={69}
        sizes="(min-width: 1024px) 310px, 180px"
      />
      <p
        className="text-center text-white/80 font-semibold 
        text-[12.02px] leading-[18.94px] tracking-[0.4px] 
        lg:text-[20px] lg:leading-[31.5px] lg:tracking-[0.8px] 
    
"
      >
        complete security. no asterisks.
      </p>
      <p
        className="font-medium text-center lg:text-start text-white/30 max-w-[500px] 
     text-[12.02px] leading-[19.24px] tracking-[0.12px]
     lg:text-[20px] lg:leading-[32px] lg:tracking-[0.2px]
     "
      >
        CRED encrypts all data and transactions to ensure a{"\n"}completely
        secure experience for our members.
      </p>
    </div>
  );
};

export default TrustBanner;

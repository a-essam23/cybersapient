import Image from "next/image";

const ProtectDividerSection = () => {
  return (
    <section className="py-[50px] px-[30px] lg:py-[125px] lg:px-[50px] xl:px-[100px] 2xl:px-[125px]">
      <hr className="border-black/60" />
      <div className="flex mt-[50px] flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="flex flex-col min-w-[60%] gap-5">
          <div className="w-[55px] aspect-square relative lg:w-[70px]">
            <Image
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/lock.png?tr=orig"
              alt="lock"
              fill
            />
          </div>
          <h2
            className="max-w-[70%] text-gradient font-danton font-extrabold whitespace-pre-wrap w-max
          text-[40px] tracking-[-0.3px] leading-[39px] 
          md:text-[56px] md:leading-[54px] md:tracking-[-0.2px] 
          xl:text-[76px] xl:leading-[70px] "
          >
            the only thing we do with your data is protect it.
          </h2>
        </div>
        <div
          className="flex flex-col text-black/60 gap-5
        text-[14px] leading-[26px] tracking-[0.1px]
        md:text-[16px] md:leading-[32px] md:tracking-[0.3px]
        xl:text-[20px] xl:leading-[36px] xl:tracking-[0.6px]
        "
        >
          <p>
            at CRED, security isn't an afterthought. it's built into everything
            we do. your data is encrypted, monitored, and protected at every
            step. we follow PCI DSS v4.0, ISO 27001, and RBI guidelines,
            ensuring top-tier safety standards. your card data is never
            stored—tokenization and masking keep your details secure.
          </p>
          <p>there are no gaps, because we didn't leave any.</p>
        </div>
      </div>
    </section>
  );
};

export default ProtectDividerSection;

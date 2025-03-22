import cn from "@utils/cn";
import Image from "next/image";

interface NowLiveButtonProps {
  className?: string;
}
const NowLiveButton: React.FC<NowLiveButtonProps> = ({ className }) => {
  return (
    <button className={cn("relative aspect-[3.48]", className)}>
      <Image
        fill
        src="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/cards/now-live-wide.png?tr=q-95"
        alt="now live"
        className="object-cover border border-white/20"
      />
      <div
        className="absolute flex items-center justify-center uppercase text-center
    border border-white/20 bg-black text-white font-bold 
    top-[-11px] left-[125px] p-[5px_10px] 
    text-[7.486px] leading-[12.833px] tracking-[2.139px] 
    lg:text-[14px] lg:leading-[24px] lg:tracking-[4px]"
      >
        now live
      </div>
    </button>
  );
};

export default NowLiveButton;

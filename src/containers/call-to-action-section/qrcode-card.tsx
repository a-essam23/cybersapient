import cn from "@utils/cn";

interface QRCodeCardProps {
  className?: string;
}

const QRCodeCard: React.FC<QRCodeCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex gap-5 px-5 py-[25px] border border-gray-300",
        className
      )}
    >
      <img
        src="https://web-images.credcdn.in/v2/_next/assets/images/cards/cred-qr.png"
        alt="cred qr code"
        className="w-[80px] h-[80px] aspect-square object-cover"
      />
      <div className="flex flex-col justify-center items-center font-[500] text-[23px] leading-[28px] tracking-[-0.382px]">
        <span>download</span>
        <span>CRED</span>
      </div>
    </div>
  );
};

export default QRCodeCard;

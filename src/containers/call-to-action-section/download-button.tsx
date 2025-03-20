import cn from "@utils/cn";

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
  return (
    <button
      className={cn(
        "flex uppercase bg-black text-white p-5 justify-center items-center gap-2.5",
        className
      )}
    >
      <span className="whitespace-nowrap font-semibold tracking-[3px] text-[10px] leading-[14px]">
        Download cred{" "}
      </span>
      <img className="w-5 h-2" src="/arrow.svg" alt="arrow" />
    </button>
  );
};

export default DownloadButton;

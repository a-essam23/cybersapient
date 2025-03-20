import TouchSectionCardFooter, {
  TouchSectionCardFooterProps,
} from "./touch-section-card-footer";

export interface TouchSectionCardProps extends TouchSectionCardFooterProps {
  src: string;
  poster: string;
}
const TouchSectionCard: React.FC<TouchSectionCardProps> = ({
  src,
  poster,
  ...footerProps
}) => {
  return (
    <div className="flex flex-col justify-between gap-[15px] w-[323px] lg:w-full max-h-[466px] lg:max-h-full">
      <div className="relative lg:flex-1 lg:min-h-0 w-[323px] lg:h-full lg:w-full">
        <video
          src={src}
          poster={poster}
          className="object-cove w-full h-full"
          autoPlay
          muted
          loop
        />
      </div>
      <TouchSectionCardFooter {...footerProps} />
    </div>
  );
};

export default TouchSectionCard;

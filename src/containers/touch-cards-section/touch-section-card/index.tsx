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
    <div className="flex flex-col box-border gap-[15px] flex-1">
      <video
        src={src}
        poster={poster}
        className="object-cover w-[323px] lg:w-full aspect-[0.967] max-w-none"
        autoPlay
        muted
        loop
      />
      <TouchSectionCardFooter {...footerProps} />
    </div>
  );
};

export default TouchSectionCard;

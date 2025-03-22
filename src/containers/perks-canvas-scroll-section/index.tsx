import CanvasScrollAnimation from "@components/canvas-scroll-animation";
import { DeviceType } from "@stores/layout-store";

const PerksCanvasScrollSection: React.FC<{ device: DeviceType }> = ({
  device,
}) => {
  return (
    <CanvasScrollAnimation
      href="https://web-images.credcdn.in/v2/_next/assets/images/cards/{device}/perks/seq_v2/perks-{id}.jpg?tr=orig"
      frameCount={339}
      containerClassName="h-[550vh]"
      easeTo="none"
      easeUpdate="none"
      device={device}
    />
  );
};

export default PerksCanvasScrollSection;

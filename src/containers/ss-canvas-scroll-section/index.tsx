import CanvasScrollAnimation from "@components/canvas-scroll-animation";
import { DeviceType } from "@stores/layout-store";

const SSCanvasScrollSection: React.FC<{ device: DeviceType }> = ({
  device,
}) => {
  return (
    <CanvasScrollAnimation
      href="https://web-images.credcdn.in/v2/_next/assets/images/cards/{device}/smart-statements/ss_seq/ss-{id}.jpg?tr=orig"
      frameCount={195}
      containerClassName="h-[500vh]"
      duration={2}
      easeTo="none"
      easeUpdate="none"
      device={device}
    />
  );
};

export default SSCanvasScrollSection;

import CanvasScrollAnimation from "@components/canvas-scroll-animation";

const SSCanvasScrollSection = () => {
  return (
    <CanvasScrollAnimation
      href="https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/smart-statements/ss_seq/ss-{id}.jpg?tr=orig"
      frameCount={195}
      containerClassName="h-[500vh]"
      duration={2}
      easeTo="none"
      easeUpdate="none"
    />
  );
};

export default SSCanvasScrollSection;

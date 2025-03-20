import CanvasScrollAnimation from "@components/canvas-scroll-animation";

const PerksCanvasScrollSection = () => {
  return (
    <CanvasScrollAnimation
      href="https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/perks/seq_v2/perks-{id}.jpg?tr=orig"
      frameCount={339}
      containerClassName="h-[550vh]"
      easeTo="none"
      easeUpdate="none"
    />
  );
};

export default PerksCanvasScrollSection;

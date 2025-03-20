import CanvasScrollAnimation from "@components/canvas-scroll-animation";

const UnbilledCanvasScroll = () => {
  /*
  https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/unbilled/seq_v3/unbilled-{id}.jpg?tr=orig
  id = 0~149
  */
  return (
    <CanvasScrollAnimation
      href="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/unbilled/seq_v3/unbilled-{id}.jpg?tr=orig"
      frameCount={150}
      containerClassName="h-[550vh]"
    />
  );
};

export default UnbilledCanvasScroll;

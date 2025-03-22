"use client";
import cn from "@utils/cn";
import styles from "./touch-cards-section.module.css";
import TouchSectionCard, { TouchSectionCardProps } from "./touch-section-card";

const cards: TouchSectionCardProps[] = [
  {
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/cards/swipe-left.png?tr=orig",
    src: "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/interactions/swipe.mp4?tr=q-95",
    poster:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/interactions/swipe-fallback.jpg?tr=orig",
    subtitle: "on any card to manage payment history, card offers, and more.",
    title: "SWIPE LEFT",
  },
  {
    poster:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/interactions/long-press-fallback.jpg?tr=orig",
    src: "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/interactions/long-press.mp4?tr=q-95",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/cards/tap-hold.png?tr=orig",
    subtitle:
      "a card to view balances, usage limits, recent activity and other key details.",
    title: "PRESS AND HOLD",
  },
  {
    poster:
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/interactions/smart-nav-fallback.jpg?tr=orig",
    src: "https://web-images.credcdn.in/v2/_next/assets/videos/cards/mobile/interactions/smart-nav.mp4?tr=q-95",
    icon: "https://web-images.credcdn.in/v2/_next/assets/images/cards/smart-nav.png?tr=orig",
    subtitle: "makes switching between cards seamless",
    title: "SMART NAVIGATION",
  },
];

const TouchCardsSection = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center py-[100px] md:py-[125px] px-[30px] lg:px-40 xl:p-[125px] gap-10 box-border">
      <h1 className={cn(styles["title"], "text-gradient")}>
        every touch is{"\n"} pure power.
      </h1>
      <div className={styles["cards-container"]}>
        {cards.map((c) => (
          <TouchSectionCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
};

export default TouchCardsSection;

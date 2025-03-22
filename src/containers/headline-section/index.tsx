import cn from "@utils/cn";
import styles from "./HeadlineSection.module.css";

const HeadlineSection = () => {
  return (
    <section
      title="headline"
      className="h-screen w-screen flex py-[100px] px-5 lg:p-[125px] justify-center text-black/60  max-w-full bg-white select-none text-center"
    >
      <div className="max-w-[800px] flex flex-col h-full justify-center items-center">
        <p className={styles.slogan}>credit card management. reimagined.</p>
        <h1 className={cn(styles.title, "text-gradient")}>
          {"everything you need."}
          {"\n"}
          {"nothing you don't."}
        </h1>

        <p className={styles.description}>
          {`welcome to a credit card experience designed to feel like second
          nature. like muscle memory. life's logistics demand enough of your
          time, effort, and attention—managing your credit cards shouldn't add
          to the list.`}
        </p>
        <p className={styles.d}>
          {"you can put your admin duties to rest. for good."}
        </p>
      </div>
    </section>
  );
};

export default HeadlineSection;

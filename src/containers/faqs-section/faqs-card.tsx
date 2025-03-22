interface FaqsCardProps {
  question: string;
  answer: string;
}

const FaqsCard: React.FC<FaqsCardProps> = ({ question, answer }) => {
  return (
    <div className="flex flex-col gap-[60px]">
      <p
        className="font-semibold  text-white text-left box-border mt-0
        text-[20px] leading-[34px] tracking-[0.1px]
        md:text-[31px] md:leading-[36px] 
        "
      >
        {question}
      </p>
      <p
        className="text-left font-[500] text-white/60
        text-[14px] leading-[30px] tracking-[-0.1px]
        md:text-[22px] md:leading-[40px] md:tracking-[-0.2px] 
        "
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqsCard;

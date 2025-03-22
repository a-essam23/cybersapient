const NavigationColumnLabel: React.FC<{ label: string }> = ({ label }) => {
  return (
    <p className="font-semibold uppercase text-[20px] leading-[32px] tracking-[6px] text-left text-white/80 break-words">
      {label}
    </p>
  );
};

export default NavigationColumnLabel;

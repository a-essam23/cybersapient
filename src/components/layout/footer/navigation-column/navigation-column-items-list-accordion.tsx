import NavigationColumnItem from "./navigation-column-item";

interface NavigationColumnItemsListAccordionProps {
  items: { label: string; href: string }[];
}

const NavigationColumnItemsListAccordion: React.FC<
  NavigationColumnItemsListAccordionProps
> = ({ items }) => {
  return (
    <ol className="grid grid-cols-2 gap-2.5 text-left auto-cols-fr">
      {items.map((item) => (
        <NavigationColumnItem
          accordion
          key={item.label}
          label={item.label}
          href={item.href}
        />
      ))}
    </ol>
  );
};

export default NavigationColumnItemsListAccordion;

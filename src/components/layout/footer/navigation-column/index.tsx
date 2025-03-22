import Accordion from "@components/accordion";
import NavigationColumnLabel from "./navgiation-column-label";
import NavigationColumnItem from "./navigation-column-item";
import NavigationColumnAccordionTrigger from "./navigation-column-label-accordion";
import NavigationColumnItemsListAccordion from "./navigation-column-items-list-accordion";

interface NavigationColumnProps {
  category: string;
  items: { label: string; href: string }[];
  accordion?: boolean;
}
const NavigationColumn: React.FC<NavigationColumnProps> = ({
  category,
  items,
  accordion,
}) => {
  if (accordion)
    return (
      <Accordion
        trigger={NavigationColumnAccordionTrigger(category)}
        className={() => "delay-75"}
      >
        <NavigationColumnItemsListAccordion items={items} />
      </Accordion>
    );
  return (
    <ol className="flex flex-col gap-5 h-max">
      <NavigationColumnLabel label={category} />
      {items.map((item) => (
        <NavigationColumnItem
          key={item.label}
          label={item.label}
          href={item.href}
        />
      ))}
    </ol>
  );
};

export default NavigationColumn;

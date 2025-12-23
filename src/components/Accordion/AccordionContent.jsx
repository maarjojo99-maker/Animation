import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ id, className, children }) {
  const { openItem } = useAccordionContext();

  const isOpen = openItem === id;

  return (
    <div className={`${className ?? ""} ${isOpen ? "open" : "close"}`} style={{ display: isOpen ? "block" : "none" }}>
      {children}
    </div>
  );
}

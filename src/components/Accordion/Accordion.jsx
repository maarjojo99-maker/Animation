import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
  return useContext(AccordionContext);
}

export default function Accordion({ children, className }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

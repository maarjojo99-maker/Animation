import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import AccordionContent from "./components/Accordion/AccordionContent";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem className="accordion-item">
            <AccordionTitle id="experience" className="accordion-item-title">
              We got 20 years of experience
            </AccordionTitle>
            <AccordionContent id="experience" className="accordion-item-content">
              <article>
                <p>You can't go wrong with us.</p>
                <p>We have been planning highly individualized vacation trips for more than 20 years.</p>
              </article>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="accordion-item">
            <AccordionTitle id="local-guides" className="accordion-item-title">
              We are working with local guides
            </AccordionTitle>
            <AccordionContent id="local-guides" className="accordion-item-content">
              <article>
                <p>We don’t operate only from our office.</p>
                <p>Instead, we collaborate with local guides directly on the ground to ensure authentic experiences.</p>
              </article>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

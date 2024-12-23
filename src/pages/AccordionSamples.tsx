import { Accordion, AccordionGroup } from '../../lib/Accordion/Accordion';

export const AccordionSamples = () => {
  return (
    <>
      <AccordionGroup>
        <Accordion title="How does a tech-savvy person fix a broken lightbulb?">
          They turn it off and on again, just like they do with routers, modems, and any other
          device. If that fails, they google 'why won't my lightbulb work?
        </Accordion>

        <Accordion title="Why do bugs always show up after deadlines?">
          Because bugs love to party when you're done! It's like they know when you've declared
          'code complete' and show up uninvited.
        </Accordion>

        <Accordion title="What happens when you fix a bug at 2 a.m.?">
          You either break five other things or question if you're even awake. The real mystery: Why
          are you working at 2 a.m.?
        </Accordion>

        <Accordion title="Why does code always break right before launch?">
          Because code is like a toddler — it behaves until everyone's watching. Then it throws a
          tantrum right when it matters most!
        </Accordion>
      </AccordionGroup>
    </>
  );
};

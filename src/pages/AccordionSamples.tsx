import { Accordion, AccordionGroup } from '../../dist/accordion';
import { Typography } from '../../dist/typography';

export const AccordionSamples = () => {
  return (
    <>
      <AccordionGroup>
        <Accordion title="How does a tech-savvy person fix a broken lightbulb?">
          <Typography>
            They turn it off and on again, just like they do with routers, modems, and any other
            device. If that fails, they google 'why won't my lightbulb work?
          </Typography>
        </Accordion>

        <Accordion title="Why do bugs always show up after deadlines?">
          <Typography>
            Because bugs love to party when you're done! It's like they know when you've declared
            'code complete' and show up uninvited.
          </Typography>
        </Accordion>

        <Accordion title="What happens when you fix a bug at 2 a.m.?">
          <Typography>
            You either break five other things or question if you're even awake. The real mystery:
            Why are you working at 2 a.m.?
          </Typography>
        </Accordion>

        <Accordion title="Why does code always break right before launch?">
          <Typography>
            Because code is like a toddler — it behaves until everyone's watching. Then it throws a
            tantrum right when it matters most!
          </Typography>
        </Accordion>
      </AccordionGroup>
    </>
  );
};

import {
  Tip,
  Info,
  Warning,
  Success,
  Error,
  Note,
  Accordion,
  AccordionGroup,
  Step,
  Steps,
  Tabs,
  Tab,
} from '../lib';

function App() {
  return (
    <div
      style={{
        padding: '20px',
      }}
      className="dark:bg-slate-950"
    >
      <Tabs>
        <Tab title="🚀 Take Off!">
          Welcome aboard! This first tab is your launchpad for everything ahead. Buckle up, get
          comfortable, and prepare for a smooth ride through the rest of the content!
        </Tab>
        <Tab title="🌟 Explore the Stars">
          Now that you've taken off, let's explore! In this tab, you'll discover the core details of
          your journey. Whether it's facts, steps, or insights—here's where you dig deeper.
        </Tab>
        <Tab title="🎯 Mission Accomplished">
          You've reached your destination! In this final tab, it's time to wrap up, reflect on what
          you've learned, and take away the key points from your adventure. Well done, explorer!
        </Tab>
      </Tabs>

      <Tip>Content for the tip goes here!</Tip>
      <Info>This is an info</Info>
      <Warning>This is a warning</Warning>
      <Success>This is a success</Success>
      <Error>This is an error</Error>
      <Note>This is a note</Note>
      <br />

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
      <br />
      <Steps>
        <Step
          title="Choose your coffee beans"
          number="1"
        >
          Pick the beans that suit your taste. Whether you like a strong dark roast or a light
          fruity blend, this is where the magic begins.
        </Step>
        <Step
          title="Measure out your coffee"
          number="2"
        >
          Use a tablespoon to measure out the right amount of coffee. Here's a quick guide:
          <br />
          <ul>
            <li>1 tablespoon for a single cup </li>
            <li>2 tablespoons if you need that extra kick </li>
            <li>A little more if it's going to be one of those days</li>
          </ul>
        </Step>
        <Step
          title="Heat your water"
          number="3"
        >
          Heat water to just before boiling. If you're using a kettle, this is the perfect time to
          zone out and daydream about your coffee.
        </Step>
        <Step
          title="Brew and enjoy"
          number="4"
        >
          Now, pour the hot water over the coffee grounds and let it brew. Take in the aroma as it
          fills the room. Wait a few minutes, pour yourself a cup, and enjoy that first sip like
          it's the best moment of the day—because it is!
        </Step>
      </Steps>
    </div>
  );
}

export default App;

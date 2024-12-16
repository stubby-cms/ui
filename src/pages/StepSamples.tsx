import { Step, Steps } from '../../lib';

export const StepSamples = () => {
  return (
    <>
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
    </>
  );
};

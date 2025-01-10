import { Step, Steps } from '../../lib';
import { Typography } from '../../lib/Typography/Typography';

export const StepSamples = () => {
  return (
    <>
      <Steps>
        <Step
          title="Choose your coffee beans"
          number="1"
        >
          <Typography>
            Pick the beans that suit your taste. Whether you like a strong dark roast or a light
            fruity blend, this is where the magic begins.
          </Typography>
        </Step>
        <Step
          title="Measure out your coffee"
          number="2"
        >
          <Typography>
            Use a tablespoon to measure out the right amount of coffee. Here's a quick guide:
            <br />
            <ul>
              <li>1 tablespoon for a single cup </li>
              <li>2 tablespoons if you need that extra kick </li>
              <li>A little more if it's going to be one of those days</li>
            </ul>
          </Typography>
        </Step>
        <Step
          title="Heat your water"
          number="3"
        >
          <Typography>
            Heat water to just before boiling. If you're using a kettle, this is the perfect time to
            zone out and daydream about your coffee.
          </Typography>
        </Step>
        <Step
          title="Brew and enjoy"
          number="4"
        >
          <Typography>
            Now, pour the hot water over the coffee grounds and let it brew. Take in the aroma as it
            fills the room. Wait a few minutes, pour yourself a cup, and enjoy that first sip like
            it's the best moment of the day—because it is!
          </Typography>
        </Step>
      </Steps>
    </>
  );
};

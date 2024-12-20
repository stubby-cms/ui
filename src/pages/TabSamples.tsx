import { Tab, Tabs, Typography } from '../../lib';

export function TabSamples() {
  return (
    <>
      <Tabs>
        <Tab title="🚀 Take Off!">
          <Typography>
            Welcome aboard! This first tab is your launchpad for everything ahead. Buckle up, get
            comfortable, and prepare for a smooth ride through the rest of the content!
          </Typography>
        </Tab>
        <Tab title="🌟 Explore the Stars">
          <Typography>
            Now that you've taken off, let's explore! In this tab, you'll discover the core details
            of your journey. Whether it's facts, steps, or insights—here's where you dig deeper.
          </Typography>
        </Tab>
        <Tab title="🎯 Mission Accomplished">
          <Typography>
            You've reached your destination! In this final tab, it's time to wrap up, reflect on
            what you've learned, and take away the key points from your adventure. Well done,
            explorer!
          </Typography>
        </Tab>
      </Tabs>
    </>
  );
}

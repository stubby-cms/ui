import { Info, Success, Tip, Warning, Error, Note } from '../../lib';

export function CalloutSamples() {
  return (
    <>
      <Tip>Content for the tip goes here!</Tip>
      <Tip>
        Content for the tip goes here! Content for the tip goes here!Content for the tip goes
        here!Content for the tip goes here!Content for the tip goes here!Content for the tip goes
        here!
      </Tip>
      <Info>This is an info</Info>
      <Warning>This is a warning</Warning>
      <Success>This is a success</Success>
      <Error>This is an error</Error>
      <Note>This is a note</Note>
    </>
  );
}

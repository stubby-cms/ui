import { Typography } from '../../lib';
import { ImageZoom } from '../../lib/Image/ImageZoom';

export const ImageSamples = () => {
  return (
    <Typography>
      <ImageZoom
        className="rounded-xl"
        src="https://mintlify-assets.b-cdn.net/bigbend.jpg"
      ></ImageZoom>
    </Typography>
  );
};

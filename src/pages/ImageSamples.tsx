import { Typography } from '../../lib';
import { ImageZoom } from '../../lib/Image/ImageZoom';

export const ImageSamples = () => {
  return (
    <Typography>
      <ImageZoom
        className="rounded-xl"
        src="https://i.stubby.io/zb2dzjl/c5ajqz.webp"
      ></ImageZoom>
    </Typography>
  );
};

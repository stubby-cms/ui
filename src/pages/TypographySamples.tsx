import { Typography } from '../../lib/Typography/Typography';
// @ts-ignore
import article from '../samples/article.mdx?raw';

export const TypographySamples = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Privacy-first programming</h1>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: article }}></div>
      </Typography>
      <div className="h-20"></div>
    </>
  );
};

import { Article } from '../../lib';
// @ts-ignore
import article from '../samples/article.mdx?raw';

export const ArticleSamples = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Privacy-first programming</h1>
      <Article source={article}></Article>
    </>
  );
};

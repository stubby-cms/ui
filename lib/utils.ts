import _slugify from 'slugify';

/**
 * Removes the front matter from a given content string.
 *
 * The front matter is expected to be enclosed within triple dashes (`---`).
 * If front matter is found, it is removed from the content string.
 * If no front matter is found, the original content string is returned.
 *
 * @param content - The content string from which to remove the front matter.
 * @returns The content string without the front matter.
 */
export const removeFrontMatter = (content: string) => {
  let frontMatter = content.match(/---([\s\S]*?)---/);
  if (frontMatter) {
    return content.replace(frontMatter[0], '');
  }
  return content;
};

export const slugify = (text: string) => {
  return _slugify(text, { lower: true, strict: true });
};

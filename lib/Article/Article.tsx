import { createElement, useEffect, useState } from 'react';
import { Note, Tip, Steps, Step } from '../';
import { highlight } from 'sugar-high';
import { removeFrontMatter, slugify } from '../utils';
import remarkGfm from 'remark-gfm';
import { MDXRemote } from 'next-mdx-remote/rsc';

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

const CustomLink = (props: { href: string; children: React.ReactNode }) => {
  let href = props.href;

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

const Code = ({ children, ...props }: { children: string }) => {
  let codeHTML = highlight(children);
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
};

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export const ArticleComponents: Record<string, React.ComponentType<any>> = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: Code,
  Note,
  Tip,
  Steps,
  Step,
};

export function Article(props: {
  components?: Record<string, React.ComponentType>;
  source: string;
}) {
  const [mdxContent, setMdxContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    MDXRemote({
      source: removeFrontMatter(props.source as string),
      components: { ...ArticleComponents, ...(props.components || {}) },
      options: mdxOptions,
    }).then(setMdxContent);
  }, [props.source, props.components]);

  return mdxContent;
}

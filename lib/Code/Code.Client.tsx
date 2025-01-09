'use client';

import clsx from 'clsx';
import { Components, toJsxRuntime } from 'hast-util-to-jsx-runtime';
import type { JSX } from 'react';
import { Fragment, useLayoutEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import type { BundledLanguage } from 'shiki/bundle/web';
import { CodeBlockComponent } from './Code';

const highlight = async (
  code: string,
  lang: BundledLanguage,
  className: string = '',
  theme: 'dark' | 'light' | 'auto' = 'auto',
  fileName?: string,
) => {
  const codeToHast = await import('shiki/bundle/web').then((mod) => mod.codeToHast);

  let themeOrThemes: any = {
    themes: {
      dark: 'material-theme-ocean',
      light: 'min-light',
    },
  };

  if (theme === 'dark') themeOrThemes = { theme: 'material-theme-ocean' };
  else if (theme === 'light') themeOrThemes = { theme: 'min-light' };

  console.log('themeOrThemes', themeOrThemes);

  const out = await codeToHast(code, {
    lang,
    ...themeOrThemes,
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props: any) => (
        <CodeBlockComponent
          fileName={fileName}
          className={className}
          {...props}
        ></CodeBlockComponent>
      ),
    } as Components,
  }) as JSX.Element;
};

export const PreBlockClient = ({
  children,
  className,
  fileName,
  lang = 'text',
  theme = 'auto',
  ...rest
}: {
  children: any;
  className?: string;
  fileName?: string;
  lang?: BundledLanguage | 'text';
  theme?: 'dark' | 'light' | 'auto';
  [key: string]: any;
}) => {
  const [nodes, setNodes] = useState(<></>);

  useLayoutEffect(() => {
    void highlight(children ?? '', lang as BundledLanguage, className, theme, fileName).then(
      setNodes,
    );
  }, [children, lang, className, theme, fileName]);

  return (
    <pre
      className={clsx('code-block', className)}
      {...rest}
    >
      {nodes}
    </pre>
  );
};

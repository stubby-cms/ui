'use client';
import { transformerNotationHighlight } from '@shikijs/transformers';
import { Components, toJsxRuntime } from 'hast-util-to-jsx-runtime';
import type { JSX } from 'react';
import { Fragment, useLayoutEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import type { BundledLanguage } from 'shiki/bundle/web';
import { CodeBlockComponent } from './Code';
import './Code.css';

const highlight = async (
  code: string,
  lang: BundledLanguage,
  className: string = '',
  fileName?: string,
) => {
  const codeToHast = await import('shiki/bundle/web').then((mod) => mod.codeToHast);

  const hast = await codeToHast(code, {
    lang,
    themes: {
      dark: 'material-theme-ocean',
      light: 'min-light',
    },
    transformers: [transformerNotationHighlight()],
  });

  return toJsxRuntime(hast, {
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

const CodeBlockClient = (props: {
  children: string;
  className: string;
  lang: BundledLanguage;
  fileName?: string;
}) => {
  console.log('CodeBlockClient', props);

  const [nodes, setNodes] = useState(<></>);

  let lang = 'text'; // default monospaced text

  if (props.lang) {
    lang = props.lang.replace('lang-', '');
  }

  if (props.className && props.className.startsWith('lang-')) {
    lang = props.className.replace('lang-', '');
  }

  useLayoutEffect(() => {
    void highlight(
      props.children ?? '',
      lang as BundledLanguage,
      props.className,
      props.fileName,
    ).then(setNodes);
  }, [props.children, props.lang, props.className]);

  return nodes;
};

export const PreBlockClient = ({ children }: { children: any }) => {
  if ('type' in children && children['type'] === 'code') {
    return CodeBlockClient(children['props']);
  }
  return children;
};

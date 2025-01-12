import { transformerNotationHighlight } from '@shikijs/transformers';
import { Components, toJsxRuntime } from 'hast-util-to-jsx-runtime';
import type { JSX } from 'react';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import type { BundledLanguage } from 'shiki';
import { codeToHast } from 'shiki';
import { CodeBlockComponent } from './Code';
import './Code.css';

interface Props {
  children: string;
  lang: BundledLanguage;
  className: string;
  fileName?: string;
}

async function CodeBlock(props: Props) {
  let lang = 'text'; // default monospaced text

  if (props.lang && props.lang.startsWith('lang-')) {
    lang = props.lang.replace('lang-', '');
  }

  if (props.className && props.className.startsWith('lang-')) {
    lang = props.className.replace('lang-', '');
  }

  const hast = await codeToHast(props.children, {
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
      pre: (_props: any) => {
        return (
          <CodeBlockComponent
            {..._props}
            code={props.children.toString()}
            fileName={props.fileName}
            className={`${props.className} ${_props.className}`}
          ></CodeBlockComponent>
        );
      },
    } as Components,
  }) as JSX.Element;
}

async function PreBlock({ children }: { children: any }) {
  if ('type' in children && children['type'] === 'code') {
    return CodeBlock(children['props']);
  }
  return children;
}

export { CodeBlock, PreBlock };

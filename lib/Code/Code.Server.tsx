import type { JSX } from 'react';
import type { BundledLanguage, DecorationItem } from 'shiki';
import { codeToHast } from 'shiki';
import { Components, toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import './Code.css';
import { CodeBlockComponent } from './Code';
import { transformerNotationHighlight } from '@shikijs/transformers';

interface Props {
  children: string;
  lang: BundledLanguage;
  className: string;
  fileName?: string;
  highlight?: string;
}

async function CodeBlock(props: Props) {
  let lang = 'text'; // default monospaced text

  if (props.lang && props.lang.startsWith('lang-')) {
    lang = props.lang.replace('lang-', '');
  }

  if (props.className && props.className.startsWith('lang-')) {
    lang = props.className.replace('lang-', '');
  }

  const decorations: DecorationItem[] = [];

  if (props.highlight) {
    const linesAndRanges = props.highlight.split(',');
    linesAndRanges.forEach((line) => {
      if (line.includes('-')) {
        const [start, end] = line.split('-');
        decorations.push({
          start: parseInt(start),
          end: parseInt(end),
          properties: {
            class: 'highlighted',
          },
        });
      } else {
        decorations.push({ start: parseInt(line), end: parseInt(line) });
      }
    });
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
            code={props.children}
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

import type { JSX } from 'react';
import type { BundledLanguage } from 'shiki';
import { codeToHast } from 'shiki';
import { Components, toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

interface Props {
  children: string;
  lang: BundledLanguage;
  className: string;
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
  });

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props: any) => (
        <pre
          {...props}
          className="code-block rounded-xl border"
        />
      ),
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

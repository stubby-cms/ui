import React from 'react';
import './Accordion.scss';

import { tv } from 'tailwind-variants';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

interface AccordionGroupProps {
  children: React.ReactNode | React.ReactNode[];
}

const accordionStyles = tv({
  slots: {
    accordionGroup: 'rounded-none border-b-0 gap-2 flex flex-col',
    accordion: 'overflow-hidden rounded-xl border border-gray-950/10 dark:border-gray-100/10',
    accordionSummary:
      'm-0 cursor-pointer select-none px-4 py-2.5 font-medium bg-gray-800/5 dark:bg-gray-300/5  before:content-[""] before:mr-2',
    accordionContent: 'p-4',
  },
});

export const Accordion: React.FC<AccordionProps> = ({ title = '', children }) => {
  const { accordion, accordionSummary, accordionContent } = accordionStyles();

  return (
    <details className={accordion()}>
      <summary className={accordionSummary()}>{title}</summary>
      <div className={accordionContent()}>{children}</div>
    </details>
  );
};

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ children }) => {
  const { accordionGroup } = accordionStyles();

  return <div className={accordionGroup()}>{children}</div>;
};

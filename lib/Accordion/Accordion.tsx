import React from 'react';
import './Accordion.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

interface AccordionGroupProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Accordion: React.FC<AccordionProps> = ({ title = '', children }) => {
  return (
    <details className={'accordion'}>
      <summary className={'accordion-summary'}>{title}</summary>
      <div className={'accordion-content'}>{children}</div>
    </details>
  );
};

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ children }) => {
  return <div className={'accordion-group'}>{children}</div>;
};

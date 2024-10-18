import React from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

interface AccordionGroupProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Accordion: React.FC<AccordionProps> = ({ title = '', children }) => {
  return (
    <details className={styles['accordion']}>
      <summary className={styles['accordionSummary']}>{title}</summary>
      <div className={styles['accordionContent']}>{children}</div>
    </details>
  );
};

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ children }) => {
  return <div className={styles['accordionGroup']}>{children}</div>;
};
